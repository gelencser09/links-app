"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import bcrypt from "bcrypt";
import { addUser, getUserByUsername } from "./users-data";
import { SessionData, defaultSession, sessionOptions } from "./session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

const CreateUser = z.object({
  username: z.string().min(3).max(10),
  password: z.string().min(3).max(20),
});

export type State = {
  errors?: {
    username?: string[];
    password?: string[];
  };
  message?: string | null;
};

export async function createUser(prevState: State, formData: FormData) {
  const validatedFields = CreateUser.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create User.",
    };
  }

  try {
    const { username, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    await addUser(username, hashedPassword);
  } catch (error: any) {
    if (error?.code === "P2002") {
      return {
        errors: {
          username: ["This username is already taken."],
          password: [],
        },
      };
    }
    return {
      message: "Unknown database error...",
    };
  }

  redirect("/auth/login");
}

export async function getSession() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.username) {
    session.username = defaultSession.username;
  }

  if (!session.userId) {
    session.userId = defaultSession.userId;
  }

  return session;
}

export async function getSessionUsername() {
  return (await getSession()).username;
}

export async function authenticate(
  _prevState: string | undefined,
  formData: FormData,
) {
  const validatedFields = CreateUser.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) return "Invalid credentials.";

  const { username, password } = validatedFields.data;
  const dbUser = await getUserByUsername(username);

  if (!dbUser) return "Invalid credentials.";

  const passwordsMatch = await bcrypt.compare(password, dbUser.password);

  if (!passwordsMatch) return "Invalid credentials.";

  const session = await getSession();

  session.username = dbUser.username;
  session.userId = dbUser.id;

  await session.save();

  redirect("/me");
}

export async function logOut() {
  const session = await getSession();
  session.username = undefined;
  session.userId = undefined;
  await session.save();
  redirect("/");
}

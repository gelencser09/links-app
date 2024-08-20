"use server";

import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { z } from "zod";
import bcrypt from "bcrypt";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { getUserByUsername } from "../data/users-data";
import { SessionData, defaultSession, sessionOptions } from "../session";

const CreateUser = z.object({
  username: z.string().min(3),
  password: z.string().min(3),
});

export type State = {
  errors?: {
    username: string[];
    password: string[];
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

  const prisma = new PrismaClient();

  try {
    await prisma.user.create({
      data: {
        username: validatedFields.data.username,
        password: await bcrypt.hash(validatedFields.data.password, 10),
      },
    });
  } catch (error: any) {
    if (error?.code === "P2002") {
      return {
        errors: {
          username: ["This username is already taken."],
        },
      };
    }
    return {
      message: "Unknown database error...",
    };
  } finally {
    await prisma.$disconnect();
  }

  redirect("/auth/login");
}

export async function getSession() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.username) {
    session.username = defaultSession.username;
  }

  return session;
}

export async function authenticate(
  prevState: string | undefined,
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

  await session.save();

  redirect("/me");
}

export async function logOut() {
  const session = await getSession();
  session.username = undefined;
  await session.save();
  redirect("/");
}

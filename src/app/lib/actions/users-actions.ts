"use server";

import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { z } from "zod";
import bcrypt from "bcrypt";

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

  try {
    const prisma = new PrismaClient();
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
  }

  redirect("/auth/login");
}

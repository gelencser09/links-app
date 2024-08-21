import { User } from "@prisma/client";
import { prisma } from "./db";

export async function fetchUsers() {
  const allUsers = await prisma.user.findMany({
    select: { id: true, username: true },
  });
  return allUsers;
}

export async function getUserByUsername(
  username: string,
): Promise<User | undefined> {
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });
  return user || undefined;
}

export async function addUser(username: string, hashedPassword: string) {
  await prisma.user.create({
    data: {
      username: username,
      password: hashedPassword,
    },
  });
}

import { PrismaClient, User } from "@prisma/client";

export async function fetchUsers() {
  const prisma = new PrismaClient();
  const allUsers = await prisma.user.findMany({
    select: { id: true, username: true },
  });
  prisma.$disconnect();
  return allUsers;
}

export async function getUserByUsername(
  username: string,
): Promise<User | undefined> {
  const prisma = new PrismaClient();
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });
  await prisma.$disconnect();
  return user || undefined;
}

import { PrismaClient } from "@prisma/client";

export async function fetchUsers() {
  const prisma = new PrismaClient();
  const allUsers = await prisma.user.findMany({
    select: { id: true, username: true },
  });
  prisma.$disconnect();
  return allUsers;
}

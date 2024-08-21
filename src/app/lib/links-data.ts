import { Link } from "@prisma/client";
import { prisma } from "./db";

export async function getLinksByUsername(username: string) {
  const links = await prisma.link.findMany({
    where: {
      User: {
        username: username,
      },
    },
  });

  return links;
}

export async function addLink(
  userId: number,
  url: string,
  label: string,
  type: string,
) {
  console.log(userId, url, label, type);
  await prisma.link.create({
    data: {
      url: url,
      label: label,
      type: type,
      user_id: userId,
    },
  });
}

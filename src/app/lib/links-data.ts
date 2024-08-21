import { Link } from "@prisma/client";
import { prisma } from "./db";

export async function getLinksByUsername(username: string) {
  const links = await prisma.link.findMany({
    where: {
      User: {
        username: username,
      },
    },
    orderBy: {
      id: "asc",
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
  await prisma.link.create({
    data: {
      url: url,
      label: label,
      type: type,
      user_id: userId,
    },
  });
}

export async function updateLink(
  sessionUserId: number,
  {
    id,
    url,
    label,
    type,
  }: {
    id?: number;
    url: string;
    label: string;
    type: string;
  },
) {
  await prisma.link.update({
    where: {
      // now this is top tier security :)
      user_id: sessionUserId,
      id: id,
    },
    data: {
      url: url,
      label: label,
      type: type,
    },
  });
}

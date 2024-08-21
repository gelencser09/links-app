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

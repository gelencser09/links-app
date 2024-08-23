import { getLinks } from "@/app/lib/links-actions";
import { View } from "./view";
import { Edit } from "./edit";
import LoadError from "./load-error";
import { useEffect, useState } from "react";
import { Link } from "@prisma/client";

export async function Links({
  username,
  editable,
}: {
  username?: string;
  editable?: boolean;
}) {
  if (!username) return <>Fix this later.</>;

  try {
    const links = await getLinks(username);

    return editable ? (
      <Edit username={username} links={links} />
    ) : (
      <View username={username} links={links} />
    );
  } catch (e) {
    return <LoadError />;
  }
}

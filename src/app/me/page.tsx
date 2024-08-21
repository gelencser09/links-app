// "use client";

import { Links } from "@/components/links";
import { getSessionUsername } from "../lib/users-actions";

export default async function Me() {
  const username = await getSessionUsername();

  return (
    <>
      <Links username={username} />
    </>
  );
}

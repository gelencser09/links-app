"use client";

import { useEffect, useState } from "react";
import { getSessionUsername } from "../lib/users-actions";

export default function Me() {
  const [username, setUsername] = useState<string | undefined>();

  useEffect(() => {
    (async () => {
      const user = await getSessionUsername();
      setUsername(user);
    })();
  });

  return <>{username}</>;
}

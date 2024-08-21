import { cache } from "react";
import { getLinksByUsername } from "./links-data";

export const getLinks = cache(async (username: string) => {
  return await getLinksByUsername(username);
});

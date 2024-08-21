import { getLinks } from "@/app/lib/links-actions";
import { View } from "./view";
import { Edit } from "./edit";

export async function Links({
  username,
  editable,
}: {
  username?: string;
  editable?: boolean;
}) {
  if (!username) return <>Fix this later.</>;

  const links = await getLinks(username);

  return editable ? (
    <Edit username={username} links={links} />
  ) : (
    <View username={username} links={links} />
  );
}

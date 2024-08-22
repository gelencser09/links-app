import { Links } from "@/components/links/links";

export default async function User({
  params,
}: {
  params: { username: string };
}) {
  return <Links username={params.username} />;
}

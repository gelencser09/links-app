import { getSession } from "../lib/actions/users-actions";

export default async function Me() {
  const session = await getSession();
  return <>{session.username}</>;
}

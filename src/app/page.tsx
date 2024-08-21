import { fetchUsers } from "./lib/users-data";

export default async function Home() {
  const allUsers = await fetchUsers();
  return (
    <>
      {allUsers.map((user) => (
        <div key={user.id}>{user.username}</div>
      ))}
    </>
  );
}

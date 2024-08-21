import { fetchUsers } from "./lib/users-data";

export default async function Home() {
  const allUsers = await fetchUsers();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {allUsers.map((user) => (
        <div key={user.id}>{user.username}</div>
      ))}
    </main>
  );
}

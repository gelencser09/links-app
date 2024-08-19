export default function User({ params }: { params: { username: string } }) {
  return <>User {params.username}</>;
}

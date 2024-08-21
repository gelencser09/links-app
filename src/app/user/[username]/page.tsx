import { Links } from "@/components/links";

export default function User({ params }: { params: { username: string } }) {
  return (
    <>
      <Links username={params.username} />
    </>
  );
}

import { Card, CardHeader } from "../card";
import { Link } from "@prisma/client";
import { LinkComponent } from "./link";

export async function View({
  username,
  links,
}: {
  username: string;
  links: Link[];
}) {
  return (
    <Card>
      <div className="flex justify-center">
        <CardHeader>See {username}'s links</CardHeader>
      </div>

      {links.map((link: Link) => (
        <section key={link.id}>
          <LinkComponent {...link} />
        </section>
      ))}
    </Card>
  );
}

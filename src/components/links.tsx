import Image from "next/image";
import { getLinks } from "@/app/lib/links-actions";
import { Link } from "@prisma/client";
import { Card, CardHeader } from "./card";
import facebook from "../../public/facebook.svg";
import instagram from "../../public/insta.svg";
import linkedin from "../../public/linkedin.svg";
import github from "../../public/github.svg";

export async function Links({ username }: { username?: string }) {
  if (!username) {
    return <>Fix this later</>;
  }

  const links = await getLinks(username);

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

function LinkComponent({ label, url, type }: Link) {
  return (
    <a
      href={url}
      target="_blank"
      className="block flex items-center m-3 p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <LinkIcon type={type} />
      <div className="w-full flex justify-center">{label}</div>
    </a>
  );
}

function LinkIcon({ type }: { type: string }) {
  switch (type) {
    case "FACEBOOK":
      return (
        <Image
          src={facebook}
          alt="Facebook logo"
          height={32}
          width={32}
          className="rounded-lg"
        />
      );
    case "INSTAGRAM":
      return (
        <Image
          src={instagram}
          alt="Instagram logo"
          height={32}
          width={32}
          className="rounded-lg"
        />
      );
    case "LINKEDIN":
      return (
        <Image
          src={linkedin}
          alt="LinkedIn logo"
          height={32}
          width={32}
          className="rounded-lg"
        />
      );
    case "GITHUB":
      return (
        <Image
          src={github}
          alt="GitHub logo"
          height={32}
          width={32}
          className="rounded-lg"
        />
      );
  }
}

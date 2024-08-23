import { InfoAlert } from "@/components/alert";
import { Card, CardBody, CardHeader } from "@/components/card";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <Card>
        <CardHeader>Welcome!</CardHeader>

        <InfoAlert>
          This is only a prototype/demo app and is not meant for production use.
          Do not provide any personal information.
        </InfoAlert>

        <CardBody>
          <ul className="list-disc list-inside">
            <li className="mt-5 text-center">
              Feel free to try this app, by{" "}
              <Link href="/auth/register" className="underline">
                creating a user
              </Link>{" "}
              and{" "}
              <Link href="/auth/login" className="underline">
                logging in
              </Link>
              .
            </li>
            <li className="mt-5 text-center">
              You can{" "}
              <Link href="/me" className="underline">
                manage your links
              </Link>{" "}
              after logging in and clicking on your user next to the logout
              button.
            </li>
            <li className="mt-5 text-center">
              See other users and share your links at /user/{"{username}"}
            </li>
          </ul>
        </CardBody>
      </Card>
    </>
  );
}

import { Card, CardBody, CardHeader } from "@/components/card";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <Card>
        <CardHeader>Welcome!</CardHeader>
        <div
          className="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            This is only a prototype/demo app and is not meant for production
            use. Do not provide any personal information.
          </div>
        </div>
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

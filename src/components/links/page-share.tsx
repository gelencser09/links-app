"use client";

import { Card, CardBody } from "../card";
import { IconButton } from "./icon-button";

export function PageShare({ username }: { username: string }) {
  const personalLink = `${process.env.NEXT_PUBLIC_BASE_URL!}/user/${username}`;
  console.log(personalLink);
  return (
    <Card>
      <CardBody>Share your page with others</CardBody>
      <div className="flex">
        <input
          type="text"
          value={personalLink}
          disabled
          className="block w-full p-2 me-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <IconButton
          type="copy"
          onClick={() => {
            navigator.clipboard.writeText(personalLink);
          }}
        />
      </div>
    </Card>
  );
}

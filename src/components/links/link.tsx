import { Link as DbLink } from "@prisma/client";
import { LinkIcon } from "./link-icon";
import Link from "next/link";

export function LinkComponent({ label, url, type }: DbLink) {
  return (
    <div className="w-full relative items-center justify-center overflow-hidden rounded-lg group hover:bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600">
      <Link
        href={url}
        target="_blank"
        className="block flex items-center m-0.5 p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <LinkIcon type={type} />
        <div className="w-full h-12 mx-5 flex justify-center text-center items-center overflow-hidden">
          {label}
        </div>
      </Link>
    </div>
  );
}

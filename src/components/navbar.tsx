import { getSession } from "@/app/lib/users-actions";
import { Logo, User } from "./icons";
import { LogoutButton } from "./logout-button";
import Link from "next/link";

export async function Navbar() {
  const { username } = await getSession();
  return (
    <nav className="bg-transparent">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <Link href="/" className="flex items-center">
          <div className="mr-3">
            <Logo />
          </div>
          <h1 className="text-lg font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
            Links App
          </h1>
        </Link>
        {username ? (
          <div className="flex items-center">
            <Link
              href="/me"
              className="mr-3 text-lg font-extrabold leading-none tracking-tight text-gray-900 dark:text-white"
            >
              <div className="hidden sm:block">{username}</div>
              <div className="sm:hidden">
                <User />
              </div>
            </Link>
            <LogoutButton />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            <Link href="/auth/register">
              <button
                type="button"
                className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Register
              </button>
            </Link>
            <Link href="/auth/login">
              <button
                type="button"
                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

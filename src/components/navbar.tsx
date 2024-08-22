import { getSession, logOut } from "@/app/lib/users-actions";
import { Logo, Logout } from "./icons";
import { LogoutButton } from "./logout-button";

export async function Navbar() {
  const { username } = await getSession();
  return (
    <nav className="bg-transparent">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <a href="/" className="flex items-center">
          <div className="mr-3">
            <Logo />
          </div>
          <h1 className="text-lg font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
            Links App
          </h1>
        </a>
        {username ? (
          <div className="flex items-center">
            <a
              href="/me"
              className="mr-3 text-lg font-extrabold leading-none tracking-tight text-gray-900 dark:text-white"
            >
              {username}
            </a>
            <LogoutButton />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            <a href="/auth/register">
              <button
                type="button"
                className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Register
              </button>
            </a>
            <a href="/auth/login">
              <button
                type="button"
                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login
              </button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

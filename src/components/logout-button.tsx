"use client";

import { logOut } from "@/app/lib/users-actions";
import { Logout } from "./icons";

export function LogoutButton() {
  return (
    <button
      onClick={() => logOut()}
      type="button"
      className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
    >
      <div className="flex items-center">
        <div className="me-2">Log out </div>
        <Logout />
      </div>
    </button>
  );
}

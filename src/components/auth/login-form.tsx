"use client";
import { useFormState } from "react-dom";
import { SubmitButton, TextInput } from "../form";
import { User, Lock } from "../icons";
import { authenticate } from "@/app/lib/actions/users-actions";

export function Form() {
  const [error, formAction, isPending] = useFormState(authenticate, undefined);

  return (
    <form action={formAction} className="mt-5">
      <TextInput
        name="username"
        label="Username"
        placeholder="Enter your username"
        icon={<User />}
      />
      <TextInput
        name="password"
        label="Password"
        placeholder="Enter your password"
        type="password"
        icon={<Lock />}
      />
      <div className="flex justify-center">
        <SubmitButton>Log me in!</SubmitButton>
      </div>
      {error ? (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error}</p>
      ) : null}
    </form>
  );
}

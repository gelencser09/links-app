"use client";

import { createUser } from "@/app/lib/users-actions";
import { useFormState } from "react-dom";
import { SubmitButton, TextInput } from "@/components/form";
import { User, Lock } from "./icons";

export default function Form() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createUser, initialState);

  return (
    <form action={dispatch} className="mt-5">
      <TextInput
        name="username"
        label="Username"
        placeholder="Enter your username"
        errors={state.errors?.username}
        icon={<User />}
      />
      <TextInput
        name="password"
        label="Password"
        placeholder="Enter your password"
        type="password"
        errors={state.errors?.password}
        icon={<Lock />}
      />
      <div className="flex justify-center">
        <SubmitButton>Create account!</SubmitButton>
      </div>
      {state.message ? (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}

"use server";

import { cache } from "react";
import {
  addLink,
  deleteLink,
  getLinksByUsername,
  updateLink,
} from "./links-data";
import { z } from "zod";
import { getSession } from "./users-actions";
import { revalidatePath } from "next/cache";

export const getLinks = cache(async (username: string) => {
  return await getLinksByUsername(username);
});

export type LinkMutationState = {
  errors?: {
    url?: string[];
    label?: string[];
  };
  message?: string;
  success?: boolean;
};

const MutateLink = z.object({
  id: z.number().optional(),
  url: z.string().url().max(100),
  label: z.string().max(40),
  type: z.string(),
});

export async function createLink(
  previousState: LinkMutationState,
  formData: FormData,
) {
  const validatedFields = MutateLink.safeParse({
    url: formData.get("url"),
    label: formData.get("label"),
    type: formData.get("type"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Link creation failed.",
    };
  }

  const { url, label, type } = validatedFields.data;

  const { userId } = await getSession();

  if (!userId) {
    return {
      message: "You must be logged in to create a link.",
    };
  }

  try {
    await addLink(userId, url, label, type);
    revalidatePath("/me");
    return {
      success: true,
    };
  } catch (err) {
    console.log(err);
    return {
      message: "Database error.",
    };
  }
}

export async function editLink(
  previousState: LinkMutationState,
  formData: FormData,
) {
  const validatedFields = MutateLink.safeParse({
    id: parseInt(formData.get("id") as string),
    url: formData.get("url"),
    label: formData.get("label"),
    type: formData.get("type"),
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Form validation failed.",
    };
  }

  const { userId } = await getSession();

  if (!userId) {
    return {
      message: "You must be logged in to edit a link.",
    };
  }

  try {
    await updateLink(userId, validatedFields.data);
    revalidatePath("/me");
    return {
      success: true,
    };
  } catch (err) {
    console.log(err);
    return {
      message: "Database error.",
    };
  }
}

export async function removeLink(
  previousState: { success?: boolean; error?: string },
  formData: FormData,
) {
  const fields = z
    .object({
      id: z.number(),
    })
    .safeParse({
      id: parseInt(formData.get("id") as string),
    });

  if (!fields.success) {
    return { error: "Invalid link id." };
  }

  const userSessionId = (await getSession()).userId;

  if (!userSessionId) {
    return {
      error: "You must be logged in to delete your link",
    };
  }

  try {
    await deleteLink(userSessionId, fields.data.id);
    revalidatePath("/me");
    return {
      success: true,
    };
  } catch (error) {
    return {
      error: "Database error",
    };
  }
}

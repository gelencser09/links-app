"use client";

import { Card, CardHeader } from "../card";
import { Link } from "@prisma/client";
import { LinkComponent } from "./link";
import { LinkForm } from "./link-form";
import { Create } from "../icons";
import { IconButton } from "./icon-button";
import { useEffect, useState } from "react";
import {
  LinkMutationState,
  createLink,
  editLink,
} from "@/app/lib/links-actions";
import { useFormState } from "react-dom";
import { create } from "domain";

export function Edit({ username, links }: { username: string; links: Link[] }) {
  const [createFormOpen, setCreateFormOpen] = useState<boolean>(false);

  const initialState = { errors: {} } as LinkMutationState;
  const [state, dispatch] = useFormState(createLink, initialState);

  useEffect(() => {
    if (state?.success) {
      setCreateFormOpen(false);
    }
  }, [state]);

  return (
    <>
      <Card>
        <div className="flex justify-center">
          <CardHeader>Manage your links</CardHeader>
        </div>

        <span className="flex justify-center m-5">
          <button
            onClick={() => setCreateFormOpen(true)}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          >
            <div className="relative flex items-center px-5 py-0.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Create />
              <p>Add new link</p>
            </div>
          </button>
        </span>

        {links.map((link: Link) => (
          <LinkComponentWithActions key={link.id} link={link} />
        ))}
      </Card>

      {createFormOpen ? (
        <LinkForm
          isOpen={createFormOpen}
          close={() => setCreateFormOpen(false)}
          dispatch={dispatch}
          state={state}
        />
      ) : null}
    </>
  );
}

function LinkComponentWithActions({ link }: { link: Link }) {
  const [editLinkModalOpen, setEditLinkModalOpen] = useState<boolean>(false);

  const initialState = { errors: {} } as LinkMutationState;
  const [state, dispatch] = useFormState(editLink, initialState);

  useEffect(() => {
    if (state.success) {
      setEditLinkModalOpen(false);
    }
  }, [state]);

  return (
    <section key={link.id} className="flex">
      <IconButton type="edit" onClick={() => setEditLinkModalOpen(true)} />
      <LinkComponent {...link} />
      <IconButton type="delete" />
      {editLinkModalOpen ? (
        <LinkForm
          isOpen={editLinkModalOpen}
          close={() => setEditLinkModalOpen(false)}
          dispatch={dispatch}
          state={state}
          defaultValues={link}
        />
      ) : null}
    </section>
  );
}

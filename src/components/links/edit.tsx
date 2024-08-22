"use client";

import { Card, CardBody, CardHeader } from "../card";
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
  removeLink,
} from "@/app/lib/links-actions";
import { useFormState } from "react-dom";
import { DeleteLinkModal } from "./delete-modal";
import { PageShare } from "./page-share";

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

      <PageShare username={username} />

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
  const [deleteLinkModalOpen, setDeleteLinkModalOpen] =
    useState<boolean>(false);

  const initialState = { errors: {} } as LinkMutationState;
  const [state, dispatch] = useFormState(editLink, initialState);

  const [deleteState, deleteDispatch] = useFormState(removeLink, {
    success: false,
    error: undefined,
  });

  useEffect(() => {
    if (state.success) {
      setEditLinkModalOpen(false);
    }
  }, [state]);

  useEffect(() => {
    if (deleteState.success) {
      setDeleteLinkModalOpen(false);
    }
  }, [deleteState]);

  return (
    <section key={link.id} className="flex">
      <LinkComponent {...link} />
      <div className="flex flex-col justify-evenly">
        <IconButton type="edit" onClick={() => setEditLinkModalOpen(true)} />
        <IconButton
          type="delete"
          onClick={() => setDeleteLinkModalOpen(true)}
        />
      </div>
      {editLinkModalOpen ? (
        <LinkForm
          isOpen={editLinkModalOpen}
          close={() => setEditLinkModalOpen(false)}
          dispatch={dispatch}
          state={state}
          defaultValues={link}
        />
      ) : null}
      {deleteLinkModalOpen ? (
        <DeleteLinkModal
          isOpen={deleteLinkModalOpen}
          close={() => setDeleteLinkModalOpen(false)}
          dispatch={deleteDispatch}
          state={deleteState}
          values={link}
        />
      ) : null}
    </section>
  );
}

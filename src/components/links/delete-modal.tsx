import { LinkMutationState } from "@/app/lib/links-actions";
import { Card, CardBody, CardHeader } from "../card";
import { Select, SubmitButton, TextInput } from "../form";
import { IconButton } from "./icon-button";
import { Link } from "@prisma/client";

export function DeleteLinkModal({
  isOpen,
  close,
  dispatch,
  state,
  values,
}: {
  isOpen: boolean;
  close: () => void;
  dispatch: (formData: FormData) => void;
  state?: { error?: string; success?: boolean };
  values: Link;
}) {
  return (
    <div
      hidden={!isOpen}
      className="overflow-y-auto overflow-x-hidden fixed top-0 left-0 right-0 z-50 justify-center items-center w-full h-full bg-gray-600 bg-opacity-75"
    >
      <div className="w-full h-full flex justify-center items-center">
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <p>Delete this link?</p>
              <IconButton type="close" onClick={close} />
            </div>
          </CardHeader>
          <CardBody>
            <p>{values.url}</p>
            <form
              action={(formData) => {
                formData.append("id", values?.id.toString()); // id will be required for the update but it is not displayed on the form
                dispatch(formData);
              }}
            >
              <div className="mt-5 flex justify-center items-center">
                <SubmitButton>Delete</SubmitButton>
              </div>
            </form>
            {state?.error ? (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                {state.error}
              </p>
            ) : null}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

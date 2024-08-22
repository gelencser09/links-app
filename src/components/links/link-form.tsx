import { LinkMutationState } from "@/app/lib/links-actions";
import { Card, CardBody, CardHeader } from "../card";
import { Select, SubmitButton, TextInput } from "../form";
import { IconButton } from "./icon-button";

export function LinkForm({
  isOpen,
  close,
  dispatch,
  state,
  defaultValues,
}: {
  isOpen: boolean;
  close: () => void;
  dispatch: (formData: FormData) => void;
  state?: LinkMutationState;
  defaultValues?: { id: number; url: string; label: string; type: string };
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
              <p>Tailor your link</p>
              <IconButton type="close" onClick={close} />
            </div>
          </CardHeader>
          <CardBody>
            <form
              action={
                defaultValues
                  ? (formData) => {
                      formData.append("id", defaultValues?.id.toString()); // id will be required for the update but it is not displayed on the form
                      dispatch(formData);
                    }
                  : dispatch
              }
            >
              <TextInput
                type="text"
                name="url"
                label="URL"
                placeholder="https://example.com/"
                icon={null}
                errors={state?.errors?.url}
                defaultValue={defaultValues?.url}
              />
              <TextInput
                type="text"
                name="label"
                label="Label"
                placeholder="Check out my website"
                icon={null}
                errors={state?.errors?.label}
                defaultValue={defaultValues?.label}
              />
              <Select
                name="type"
                label="Type"
                defaultValue={defaultValues?.type}
              >
                <option value="FACEBOOK">Facebook</option>
                <option value="INSTAGRAM">Instagram</option>
                <option value="GITHUB">Github</option>
                <option value="LINKEDIN">LinkedIn</option>
                <option value="WEBSITE">Website</option>
                <option value="OTHER">Other</option>
              </Select>
              <div className="mt-5 flex justify-center items-center">
                <SubmitButton>Finish!</SubmitButton>
              </div>
            </form>
            {state?.message ? (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                {state.message}
              </p>
            ) : null}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

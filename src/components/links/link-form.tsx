import { LinkMutationState } from "@/app/lib/links-actions";
import { Card, CardBody, CardHeader } from "../card";
import { Select, SubmitButton, TextInput } from "../form";
import { IconButton } from "./icon-button";

export function LinkForm({
  isOpen,
  close,
  dispatch,
  state,
}: {
  isOpen: boolean;
  close: () => void;
  dispatch: (formData: FormData) => void;
  state?: LinkMutationState;
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
            <form action={dispatch}>
              <TextInput
                type="text"
                name="url"
                label="URL"
                placeholder="https://example.com/"
                icon={null}
                errors={state?.errors?.url}
              />
              <TextInput
                type="text"
                name="label"
                label="Label"
                placeholder="Check out my website"
                icon={null}
                errors={state?.errors?.label}
              />
              <Select name="type" label="Type">
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
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

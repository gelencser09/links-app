import Form from "@/components/create-user-form";
import { Card, CardBody, CardHeader } from "@/components/card";

export default function Register() {
  return (
    <Card>
      <CardHeader>Create account</CardHeader>
      <CardBody>
        <Form />
      </CardBody>
    </Card>
  );
}

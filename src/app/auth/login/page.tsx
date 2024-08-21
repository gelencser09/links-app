import { Form } from "@/components/login-form";
import { Card, CardBody, CardHeader } from "@/components/card";

export default function Login() {
  return (
    <Card>
      <CardHeader>Sign in!</CardHeader>
      <CardBody>
        <Form />
      </CardBody>
    </Card>
  );
}

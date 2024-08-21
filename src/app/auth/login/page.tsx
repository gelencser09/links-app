import { Form } from "@/components/login-form";
import { Card, CardBody, CardHeader } from "@/components/card";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 py-24">
      <Card>
        <CardHeader>Sign in!</CardHeader>
        <CardBody>
          <Form />
        </CardBody>
      </Card>
    </main>
  );
}

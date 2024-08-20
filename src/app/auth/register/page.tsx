import Form from "@/components/auth/create-user-form";
import { Card, CardBody, CardHeader } from "@/components/card";

export default function Register() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 py-24">
      <Card>
        <CardHeader>Create account</CardHeader>
        <CardBody>
          <Form />
        </CardBody>
      </Card>
    </main>
  );
}

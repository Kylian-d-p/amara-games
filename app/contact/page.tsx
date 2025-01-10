import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "./form";

export default function Contact() {
  return (
    <main className="flex justify-center pt-5">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl font-bold">Contact</h1>
          </CardTitle>
          <CardDescription>
            <p>Nous écrire</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </main>
  );
}

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const inputs = [
    {
      label: "Nom",
      name: "name",
      inputType: "input",
    },
    {
      label: "Email",
      name: "email",
      inputType: "input",
      type: "email"
    },
    {
      label: "Objet",
      name: "subject",
      inputType: "input"
    },
    {
      label: "Message",
      name: "body",
      inputType: "textarea",
    },
  ];
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
          <form className="flex flex-col gap-5">
            {inputs.map((input) => (
              <div className="flex flex-col gap-2">
                <Label>{input.label}</Label>
                {input.inputType === "input" ? (
                  <Input type={input.type || "text"} name={input.name} placeholder={input.label} />
                ) : (
                  <Textarea name={input.name} placeholder={input.label} />
                )}
              </div>
            ))}
            <Button className="w-full">Envoyer</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}

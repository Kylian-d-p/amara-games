"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import contactAction from "./action";
import { schema } from "./schema";

export default function ContactForm() {
  const fields = [
    {
      label: "Nom",
      name: "name",
      inputType: "input",
    },
    {
      label: "Email",
      name: "email",
      inputType: "input",
      type: "email",
    },
    {
      label: "Objet",
      name: "subject",
      inputType: "input",
    },
    {
      label: "Message",
      name: "body",
      inputType: "textarea",
    },
  ];

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (formData: FormData) => {
    setSuccess(null);
    setError(null);
    
    const checkedValues = await schema.safeParseAsync({
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      body: formData.get("body"),
    });

    if (!checkedValues.success) {
      return setError("Les données envoyées ne sont pas valides");
    }

    setLoading(true);
    const res = await contactAction(checkedValues.data);
    setLoading(false);

    if (res.error) {
      setError(res.error);
    }

    if (res.message) {
      setSuccess(res.message);
    }
  };

  return (
    <form className="flex flex-col gap-5" action={onSubmit}>
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col gap-2">
          <Label>{field.label}</Label>
          {field.inputType === "input" ? (
            <Input className="bg-background" type={field.type || "text"} name={field.name} placeholder={field.label} />
          ) : (
            <Textarea className="bg-background" name={field.name} placeholder={field.label} />
          )}
        </div>
      ))}
      <Button disabled={loading} className="w-full">
        Envoyer
      </Button>
      {error && <p className="text-destructive">{error}</p>}
      {success && <p className="text-success">{success}</p>}
    </form>
  );
}

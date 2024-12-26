"use client";

import { z } from "zod";
import { toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema } from "@/lib/schemas";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Inputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      subject: "",
      from_name: "",
      botcheck: "",
    },
  });

  const processForm: SubmitHandler<Inputs> = async (data, e) => {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          toast.success("Message sent successfully.");
          e?.target.reset();
          reset();
        } else {
          toast.error("An error occurred. Please try again.");
        }
      })
      .catch((error) => {
        toast.error("An error occurred. Please try again.");
        console.log(error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(processForm)}
      className="mt-6 lg:flex-auto"
      noValidate
    >
      <Input type="hidden" value="" {...register("access_key")} />
      <Input type="hidden" {...register("subject")} />
      <Input type="hidden" value="Mission Control" {...register("from_name")} />
      <Input
        type="checkbox"
        id=""
        className="hidden"
        style={{ display: "none" }}
        {...register("botcheck")}
      ></Input>
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <Input
            id="name"
            type="text"
            placeholder="Name"
            autoComplete="given-name"
            {...register("name")}
          />
          {errors.name?.message && (
            <p className="ml-1 mt-2 text-sm text-rose-400">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="ml-1 mt-2 text-sm text-rose-400">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="sm:col-span-2">
          <Textarea rows={4} placeholder="Message" {...register("message")} />
          {errors.message?.message && (
            <p className="ml-1 mt-2 text-sm text-rose-400">
              {errors.message.message}
            </p>
          )}
        </div>
      </section>
      <section className="mt-6">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Contact"}
        </Button>
      </section>
    </form>
  );
}

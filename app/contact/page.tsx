import ContactForm from "@/components/contact-form";
import EmailLink from "@/components/email-link";

export default function Contact() {
  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        <h2 className="title">Contact form</h2>
        <ContactForm />
        <hr className="mt-6"></hr>
        <EmailLink />
      </div>
    </section>
  );
}

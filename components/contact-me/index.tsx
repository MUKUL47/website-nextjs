import React, { useState } from "react";
import { Input, TextArea } from "../inputs";
import ButtonAnimationWrapper from "../wrappers/button-animation.wrapper";
import FolioComponentWrapper from "../wrappers/folio-component.wrapper";
import FolioDescriptionWrapper from "../wrappers/folio-description.wrapper";
import FolioHeaderInfoWrapper from "../wrappers/folio-header-info.wrapper";
export default function ContactMe() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState<boolean>(false);
  const submitForm = async (e: any) => {
    try {
      e.preventDefault();
      setSubmitting(true);
      await fetch("/api/feedback", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      setSubmitting(false);
      alert("Thank You. I'll get back to you as soon as possible");
      setForm({ name: "", email: "", message: "" });
    } catch (e) {
      setSubmitting(false);
      setForm({ name: "", email: "", message: "" });
    }
  };
  const onFormChange = (key: string) => {
    return (ev: any) => {
      setForm({ ...form, [key]: ev.target.value });
    };
  };
  return (
    <FolioComponentWrapper id="contact">
      <FolioHeaderInfoWrapper
        info="Please reach out to me anytime!"
        header="Let's Connect"
      />
      <FolioDescriptionWrapper>
        <form
          onSubmit={submitForm}
          name="contact"
          method="POST"
          action="/api/feedback"
          className="flex flex-col gap-5 w-full"
        >
          <Input
            type="text"
            id="name"
            value={form.name}
            onChange={onFormChange("name")}
            name="name"
            label="Enter Name"
            placeholder="Name"
          />

          <Input
            type="email"
            id="email"
            value={form.email}
            onChange={onFormChange("email")}
            name="email"
            required
            label="Enter Email"
            placeholder="Email"
          />
          <TextArea
            name="message"
            value={form.message}
            onChange={onFormChange("message")}
            rows={4}
            cols={50}
            placeholder="Message"
            required
          />
          <ButtonAnimationWrapper>
            <Input
              type="submit"
              value={(!submitting && "Submit") || "Submitting..."}
              disabled={submitting}
              id="submit-btn"
              className="bg-black text-center px-4 py-2 text-white rounded-md w-32 cursor-pointer disabled:cursor-progress"
            />
          </ButtonAnimationWrapper>
        </form>
      </FolioDescriptionWrapper>
    </FolioComponentWrapper>
  );
}

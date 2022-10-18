import React from "react";
import { Input, TextArea } from "../inputs";
import ButtonAnimationWrapper from "../wrappers/button-animation.wrapper";
import FolioComponentWrapper from "../wrappers/folio-component.wrapper";
import FolioDescriptionWrapper from "../wrappers/folio-description.wrapper";
import FolioHeaderInfoWrapper from "../wrappers/folio-header-info.wrapper";
export default function ContactMe() {
  return (
    <FolioComponentWrapper id="contact">
      <FolioHeaderInfoWrapper
        info="Please reach out to me anytime!"
        header="Let's Connect"
      />
      <FolioDescriptionWrapper>
        <form
          name="contact"
          method="POST"
          action="/api/feedback"
          className="flex flex-col gap-5 w-full"
        >
          <Input
            type="text"
            id="name"
            name="name"
            label="Enter Name"
            placeholder="Name"
          />

          <Input
            type="email"
            id="email"
            name="email"
            required
            label="Enter Email"
            placeholder="Email"
          />
          <TextArea
            name="message"
            rows={4}
            cols={50}
            placeholder="Message"
            required
          />
          <ButtonAnimationWrapper>
            <Input
              type="submit"
              value="Submit"
              id="submit-btn"
              className="bg-black text-center px-4 py-2 text-white rounded-md w-32 cursor-pointer"
            />
          </ButtonAnimationWrapper>
        </form>
      </FolioDescriptionWrapper>
    </FolioComponentWrapper>
  );
}

import React from "react";
interface Props {
  children: React.ReactNode;
}
export default function FolioComponentWrapper({ children }: Props) {
  return (
    <section
      className={`component-wrapper py-16 gap-8 flex flex-col m-auto md:w-5/6 sm:gap-16 sm:py-32`}
    >
      {children}
    </section>
  );
}

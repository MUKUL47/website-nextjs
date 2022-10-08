import React from "react";
interface Props {
  children: React.ReactNode;
}
export default function FolioDescriptionWrapper({ children }: Props) {
  return (
    <summary className="flex flex-col gap-20 m-auto sm:flex-row w-10/12 sm:w-3/4">
      {children}
    </summary>
  );
}

import React from "react";
interface Props {
  header: string | React.ReactNode;
  info: string | React.ReactNode;
}
export default function FolioHeaderInfoWrapper({ header, info }: Props) {
  return (
    <>
      <header className="w-10/12 sm:text-center text-3xl sm:text-5xl m-auto">
        {header}
      </header>
      <p className="sm:text-center w-10/12 font-sans sm:w-1/2 m-auto text-xl sm:text-2xl">
        {info}
      </p>
    </>
  );
}

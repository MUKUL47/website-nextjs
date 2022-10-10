import React from "react";
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  // children: React.ReactNode;
}
export default function FolioDescriptionWrapper({ ...props }: Props) {
  return (
    <summary
      {...props}
      className={`flex flex-col gap-20 m-auto sm:flex-row w-10/12 sm:w-3/4 ${props.className}`}
    >
      {props.children}
    </summary>
  );
}

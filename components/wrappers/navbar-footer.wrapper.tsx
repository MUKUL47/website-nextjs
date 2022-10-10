import React from "react";
import Footer from "../footer";
import Navbar from "../navbar";
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}
export default function NavbarFooterWrapper(props: Props) {
  return (
    <>
      <Navbar />
      <div {...props} style={{ minHeight: "calc(100vh - 274px)" }}>
        {props.children}
      </div>
      <Footer />
    </>
  );
}

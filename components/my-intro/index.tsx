import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { VscDebugStart } from "react-icons/vsc";
import EmailIcon from "@mui/icons-material/Email";
import myintroStyles from "./my-intro.module.css";
import Link from "next/link";
import { MyPersonalInfo } from "../../utils";
export default function MyIntro() {
  return (
    <section id="home">
      <SocialLinks />
      <div className={`flex flex-col h-3/4 md:h-1/2 ${myintroStyles.myintro}`}>
        <div className="flex-0.8 flex items-center justify-center my-36 sm:my-72">
          <div className="flex flex-col gap-14 justify-center items-center text-black w-3/4">
            <p className="text-5xl sm:text-7xl text-center">
              HEY, {"I'M"} Mukul Dutt
            </p>
            <p className="text-2xl text-center ">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
            <button className="hidden sm:block p-4 rounded-full cursor-pointer bg-black text-white">
              <Link href="/#about">
                <a>
                  <VscDebugStart className="text-2xl" />
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
function SocialLinks() {
  const linkStyle = { fontSize: "2.25rem", color: "#FFF", cursor: "pointer" };
  return (
    <div className="justify-center pt-14 h-48 w-11 fixed top-2/4 -translate-y-1/2 hover:w-24 delay-100 transition-all hidden sm:block">
      <div className="bg-slate-600 flex flex-col rounded-r-md p-1 gap-2 items-center py-2">
        <a
          href={MyPersonalInfo.LINKEDIN_PROFILE}
          target={"_blank"}
          rel="noreferrer"
        >
          <LinkedInIcon
            style={linkStyle}
            className="hover:scale-125 transition-all opacity-100 z-20"
          />
        </a>
        <a
          href={MyPersonalInfo.GITHUB_PROFILE}
          target={"_blank"}
          rel="noreferrer"
        >
          <GitHubIcon
            style={{ ...linkStyle, fontSize: "1.75rem" }}
            className="hover:scale-125 transition-all"
          />
        </a>
        <a
          href={`mailto:${MyPersonalInfo.EMAIL}`}
          title={MyPersonalInfo.EMAIL}
          target={"_blank"}
          rel="noreferrer"
        >
          <EmailIcon
            style={{ ...linkStyle, fontSize: "1.9rem" }}
            className="hover:scale-125 transition-all opacity-100 z-20"
          />
        </a>
      </div>
    </div>
  );
}

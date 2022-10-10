import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { AiTwotoneHeart } from "react-icons/ai";
import { MyPersonalInfo } from "../../utils";
export default function Footer() {
  return (
    <footer className="bg-gray-900 p-5 text-white font-bold py-11 flex flex-col sm:px-60">
      <div className="flex justify-between gap-10 flex-col sm:flex-row">
        <div className="flex flex-col gap-5">
          <strong>MUKUL DUTT</strong>
          <p className="text-xs text-gray-200 flex-1">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <strong>Social</strong>
          <span className="flex gap-2">
            <a
              href={MyPersonalInfo.LINKEDIN_PROFILE}
              target={"_blank"}
              rel="noreferrer"
            >
              <LinkedInIcon className="hover:scale-125 transition-all opacity-100 z-20" />
            </a>

            <a
              href={MyPersonalInfo.GITHUB_PROFILE}
              target={"_blank"}
              rel="noreferrer"
            >
              <GitHubIcon className="hover:scale-125 transition-all" />
            </a>
          </span>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center gap-2">
        <TbBrandNextjs title="Next.Js" className="text-5xl" />
        <span className="text-3xl text-red-400">♥ </span>
        <TbBrandTailwind title="Tailwind" className="text-5xl" />
      </div>
    </footer>
  );
}

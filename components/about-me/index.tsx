import React, { useMemo } from "react";
import { MyPersonalInfo } from "../../utils";
import FolioComponentWrapper from "../wrappers/folio-component.wrapper";
import FolioDescriptionWrapper from "../wrappers/folio-description.wrapper";
import FolioHeaderInfoWrapper from "../wrappers/folio-header-info.wrapper";
import SkillSets from "./skill-sets";

export default function AboutMe() {
  return (
    <FolioComponentWrapper id="about">
      <FolioHeaderInfoWrapper
        info="Here you will find more information about me, what I do, and my current
      skills mostly in terms of programming and technology"
        header="ABOUT ME"
      />
      <FolioDescriptionWrapper>
        <AboutMeDetail />
        <div className="flex flex-col gap-12 flex-1">
          <strong className="text-2xl">My Skills</strong>
          <SkillSets skills={MyPersonalInfo.SKILL_SETS} />
        </div>
      </FolioDescriptionWrapper>
    </FolioComponentWrapper>
  );
}
function AboutMeDetail() {
  return (
    <div className="flex flex-col gap-12 flex-1">
      <strong className="text-2xl">Get to know me!</strong>
      <section className="flex flex-col gap-2 ">
        <p>
          {"I'm"} a Frontend Web Developer building the Front-end of Websites
          and Web Applications that leads to the success of the overall product.
          Check out some of my work in the Projects section.
        </p>
        <p>
          Being motivated with good attitude, strong development skills. Can
          adapt various ongoing technologies. Ability to solve programming
          related questions using various data structures. Love to code and
          develop various games, applications libraries etc using various
          javascript technologies such as Angular, React, MongoDB, Electron,
          Express, JScanvas, TypeScript and have a total experience of 3+ Years.
        </p>
      </section>
    </div>
  );
}

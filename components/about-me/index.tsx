import React, { useMemo } from "react";
import FolioComponentWrapper from "../wrappers/folio-component.wrapper";
import FolioDescriptionWrapper from "../wrappers/folio-description.wrapper";
import FolioHeaderInfoWrapper from "../wrappers/folio-header-info.wrapper";

export default function AboutMe() {
  return (
    <FolioComponentWrapper>
      <FolioHeaderInfoWrapper
        info="Here you will find more information about me, what I do, and my current
      skills mostly in terms of programming and technology"
        header="ABOUT ME"
      />
      <FolioDescriptionWrapper>
        <AboutMeDetail />
        <SkillSet />
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
          {"I'm"} a Frontend Web Developer building the Front-end of Websites
          and Web Applications that leads to the success of the overall product.
          Check out some of my work in the Projects section.
        </p>
        <p>
          {"I'm"} a Frontend Web Developer building the Front-end of Websites
          and Web Applications that leads to the success of the overall product.
          Check out some of my work in the Projects section.
        </p>
      </section>
    </div>
  );
}
function SkillSet() {
  const skills = useMemo(() => {
    return [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "NodeJs",
      "ElectronJs",
      "RxJs",
      "Canvas",
      "Express",
      "Next.Js",
      "Nest.Js",
      "MongoDB",
      "Express",
    ];
  }, []);
  return (
    <div className="flex flex-col gap-12 flex-1">
      <strong className="text-2xl">My Skills</strong>
      <section className="flex flex-wrap gap-2">
        {skills.map((skill) => {
          return (
            <p
              key={skill}
              className="px-5 py-2 text-white bg-gray-600 rounded-md"
            >
              {skill}
            </p>
          );
        })}
      </section>
    </div>
  );
}

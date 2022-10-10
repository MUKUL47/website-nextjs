import React, { useState, useEffect } from "react";
import FolioComponentWrapper from "../wrappers/folio-component.wrapper";
import FolioDescriptionWrapper from "../wrappers/folio-description.wrapper";
import FolioHeaderInfoWrapper from "../wrappers/folio-header-info.wrapper";
import Image from "next/image";
import "./my-project.module.css";
import Util, { myProjectsData } from "../../utils";
import { Project, Title } from "../../types";
import Link from "next/link";

export default function MyProjects() {
  return (
    <FolioComponentWrapper id="projects">
      <FolioHeaderInfoWrapper
        info="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
        header="MY PROJECTS"
      />
      <FolioDescriptionWrapper>
        <div className="my-projects flex flex-col gap-5 w-full">
          {myProjectsData.map((project: Partial<Project>) => {
            return (
              <div key={project.category}>
                <ProjectType label={project.category!} />
                <ProjectCards titles={project.titles!} />
              </div>
            );
          })}
        </div>
      </FolioDescriptionWrapper>
    </FolioComponentWrapper>
  );
}

function ProjectCards({ titles }: { titles: Title[] }) {
  return (
    <data
      className="grid gap-5 w-full"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
      }}
    >
      {titles!.map?.((title) => {
        return <ProjectImage title={title} key={title.name} />;
      })}
    </data>
  );
}

function ProjectType({ label }: { label: string }) {
  return (
    <p className="px-4 py-2 bg-gray-800 rounded-md text-white w-auto mb-5">
      {label}
    </p>
  );
}
function ProjectImage({ title }: { title: Title }) {
  const image = title.img;
  return (
    <div className="relative project-image flex flex-col cursor-pointer">
      <ProjectLinkWrapper name={title.name}>
        <Image
          src={
            (image.toLowerCase().startsWith("http") && image) ||
            `/../public/assets/my-projects${image}`
          }
          width="250px"
          key={title.name}
          priority
          height="250px"
          className="rounded-t-md transition-all hover:scale-150"
          layout="responsive"
          // loading="lazy"
          alt="Project"
        />
      </ProjectLinkWrapper>
      <strong className="p-2 py-3 bg-black text-white rounded-b-md flex-1 text-sm text-center">
        <ProjectLinkWrapper name={title.name}>{title.name}</ProjectLinkWrapper>
      </strong>
    </div>
  );
}
function ProjectLinkWrapper({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return <Link href={Util.getProjectLinkFromName(name || "")}>{children}</Link>;
}

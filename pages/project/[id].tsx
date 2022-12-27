/* eslint-disable @next/next/no-img-element */
import GitHubIcon from "@mui/icons-material/GitHub";
import { useRouter } from "next/router";
import React, { useLayoutEffect, useState } from "react";
import SkillSets from "../../components/about-me/skill-sets";
import ContactMe from "../../components/contact-me";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import FolioComponentWrapper from "../../components/wrappers/folio-component.wrapper";
import FolioDescriptionWrapper from "../../components/wrappers/folio-description.wrapper";
import FolioHeaderInfoWrapper from "../../components/wrappers/folio-header-info.wrapper";
import { Title } from "../../types";
import Util from "../../utils";
interface Props {
  project: Title;
}
export default function ProjectById() {
  const router = useRouter();
  const [projectInfo, setProjectInfo] = useState<{
    project: Title;
    image: string;
  }>();
  useLayoutEffect(() => {
    if (router.isReady) {
      const project = Util.getProjectFromId((router.query?.id as string) || "");
      let image = project?.demo || project?.img;
      if (!project) router.push("/404");
      else {
        setProjectInfo({ image: image!, project });
      }
    }
  }, [router.isReady]);
  return !!projectInfo ? (
    <ProjectInfo project={projectInfo.project} image={projectInfo.image!} />
  ) : null;
}

function ProjectInfo({ project, image }: { image: string; project: Title }) {
  return (
    <main>
      <Navbar />
      <FolioComponentWrapper>
        <FolioHeaderInfoWrapper
          info={project.description}
          header={project.name}
        ></FolioHeaderInfoWrapper>
        <FolioDescriptionWrapper className="justify-center">
          <img
            src={
              (image.toLowerCase().startsWith("http") && image) ||
              `/../../assets/my-projects${image}`
            }
            style={{ width: "800px", height: "500px" }}
            className="rounded-t-md transition-all hover:scale-110"
            loading="lazy"
            alt="Project"
          />
        </FolioDescriptionWrapper>

        <FolioDescriptionWrapper className="sm:flex-col">
          <Description header="Project Overview">
            <p dangerouslySetInnerHTML={{ __html: project.info }}></p>
          </Description>
          <Description header="Tech Stack">
            <SkillSets
              skills={project.tech.split(/,|&/g).map((v) => v.trim())}
              className="bg-blue-900 rounded-full"
            />
          </Description>
          <Description
            headChild={
              <a
                target={"_blank"}
                rel="noreferrer"
                href={project.link}
                className="flex justify-between"
              >
                Repository
                <GitHubIcon />
              </a>
            }
          />
        </FolioDescriptionWrapper>
      </FolioComponentWrapper>
      <ContactMe />
      <Footer />
    </main>
  );
}

function Description({
  children,
  header,
  headChild,
}: {
  headChild?: React.ReactNode;
  children?: React.ReactNode;
  header?: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      <strong className="text-1xl bite p-2 rounded-md bg-gray-900 px-3 text-white">
        {headChild || header}
      </strong>
      {children}
    </div>
  );
}

// export const getServerSideProps = async ({ params }: { params: any }) => {
//   try {
//     const project = Util.getProjectFromId(params?.id || "");
//     if (!project) throw new Error();
//     // project.img = project.demo || project.img;
//     return {
//       props: {
//         project,
//       },
//     };
//   } catch (e) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/404",
//       },
//     };
//   }
// };

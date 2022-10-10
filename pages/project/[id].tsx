import Image from "next/image";
import SkillSets from "../../components/about-me/skill-sets";
import Navbar from "../../components/navbar";
import FolioComponentWrapper from "../../components/wrappers/folio-component.wrapper";
import FolioDescriptionWrapper from "../../components/wrappers/folio-description.wrapper";
import FolioHeaderInfoWrapper from "../../components/wrappers/folio-header-info.wrapper";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Title } from "../../types";
import Util from "../../utils";
import Footer from "../../components/footer";
import ContactMe from "../../components/contact-me";
interface Props {
  project: Title;
}
export default function ProjectById({ project }: Props) {
  return (
    <main>
      <Navbar />
      <FolioComponentWrapper>
        <FolioHeaderInfoWrapper
          info={project.description}
          header={project.name}
        ></FolioHeaderInfoWrapper>
        <FolioDescriptionWrapper className="justify-center">
          <Image
            src={Util.getProjectSource(project?.demo || project.img)}
            width={"800"}
            height={"500"}
            className="rounded-t-md transition-all hover:scale-150"
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

export const getServerSideProps = async ({ params }: { params: any }) => {
  try {
    const project = Util.getProjectFromId(params?.id || "");
    if (!project) throw new Error();
    // project.img = project.demo || project.img;
    return {
      props: {
        project,
      },
    };
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }
};

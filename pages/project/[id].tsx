import Navbar from "../../components/navbar";
import { Title } from "../../types";
import Util from "../../utils";
interface Props {
  project: Title;
}
export default function ProjectById(props: Props) {
  return (
    <main>
      <Navbar />
      {JSON.stringify(props.project, null, 1)}
    </main>
  );
}

export const getServerSideProps = async ({ params }: { params: any }) => {
  try {
    const project = Util.getProjectFromId(params?.id || "");
    if (!project) throw new Error("Project not found");
    return {
      props: {
        project,
      },
    };
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: "/project-not-found",
      },
    };
  }
};

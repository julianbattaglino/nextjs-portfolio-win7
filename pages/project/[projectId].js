import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import ProjectDetails from "../../components/ProjectDetails";
import projects from "../projects.json";
import workProjects from "../work-projects.json";

const DynamicItem = () => {
  const router = useRouter();
  const { projectId } = router.query;

  // Encuentra el proyecto correspondiente en base al ID
  const project = projects.projects.find((project) => project.id === projectId) ||
                  workProjects.projects.find((project) => project.id === projectId);

  return (
    <>
      {project ? <ProjectDetails project={project} /> : <p>Proyecto no encontrado</p>}
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default DynamicItem;


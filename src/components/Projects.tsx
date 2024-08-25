import useTheme from "../context/themeContext";
import ProjectsSection from "./ProjectsSection";

function Projects() {
  const { projects } = useTheme();

  return (
    <div>
      <ProjectsSection
        projects={projects}
        bgColor="bg-[#091E05]"
        extraClass="pb-32"
      />
    </div>
  );
}

export default Projects;

import ProjectCard from "./ProjectCard";
import useTheme from "../context/themeContext";
import { ProjectType } from "../App";
import { ReactElement } from "react";

function ProjectsSection({
  projects,
  heading,
  bgColor,
  element,
  extraClass,
}: {
  projects: ProjectType[];
  heading?: string;
  bgColor: string;
  element?: ReactElement;
  extraClass?: string;
}) {
  const { theme } = useTheme();

  return (
    <div
      className={`h-full ${extraClass} ${
        theme === "dark" ? `${bgColor} text-white` : "bg-white border-b-2"
      }`}
    >
      <h2 className="py-20 px-8 text-6xl font-semibold">{heading}</h2>
      <div className="flex flex-col items-center justify-center gap-14">
        <div className="flex flex-wrap justify-center gap-16 pt-6">
          {projects.map((item) => (
            <ProjectCard name={item.name} slug={item.slug} image={item.image} />
          ))}
        </div>
        {element}
      </div>
    </div>
  );
}

export default ProjectsSection;

import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import Hero from "./Hero";
import useTheme from "../context/themeContext";
import LogoCarousel from "./LogoCarousel";
import { ProjectType } from "../App";
import { useEffect, useState } from "react";
import ProjectsSection from "./ProjectsSection";

const showMoreProjects = (
  <Link to="/projects" className="flex items-center mb-10 hover:text-[#D8315B]">
    <p className="text-xl">Show more projects</p>{" "}
    <MdNavigateNext className="text-3xl mt-1" />
  </Link>
);

function Home() {
  const { theme, projects } = useTheme();
  const [threeProjects, setThreeProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    if (projects.length > 3) {
      let arr: ProjectType[] = [];
      for (let i = 0; i < 3; i++) {
        arr.push(projects[i]);
      }
      setThreeProjects(arr);
    } else {
      setThreeProjects(projects);
    }
  }, [projects]);

  return (
    <main className="h-full">
      <Hero />

      {/* Project Section */}
      <ProjectsSection
        projects={threeProjects}
        heading="Projects"
        bgColor="bg-[#55111B]"
        element={showMoreProjects}
      />

      {/* Logo Section */}
      <div
        className={`${
          theme === "dark"
            ? "bg-[#091E05] text-white"
            : "bg-white border border-b-2"
        }`}
      >
        <h2 className="py-20 mx-8 text-3xl md:text-6xl font-semibold">
          Technologies I Know
        </h2>
        <LogoCarousel />
      </div>
    </main>
  );
}

export default Home;

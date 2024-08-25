import { useParams } from "react-router-dom";
import useTheme from "../context/themeContext";
import { useEffect, useState } from "react";
import { ProjectType } from "../App";

function Project() {
  const [curentProject, setCurrentProject] = useState<ProjectType>();
  const { theme, projects } = useTheme();
  const { slug } = useParams();

  useEffect(() => {
    const project = projects.filter((item) => item.slug === slug);
    setCurrentProject(project[0]);
  }, []);

  return (
    <div
      className={`w-full h-full pb-20 ${
        theme === "dark"
          ? "bg-[#091E05] text-white"
          : "bg-white border border-b-2"
      }`}
    >
      <div className="w-full h-full flex flex-col items-center justify-center pt-32">
        <div className="p-6 flex flex-col items-center gap-4">
          <img
            src={`./src/assets/${curentProject?.image}.png`}
            alt={curentProject?.name}
            className="w-[64rem] h-full rounded-lg border-gray-400 border-2"
          />
          <a
            href={curentProject?.github}
            target="_blank"
            className="text-lg underline hover:text-[#D8315B]"
          >
            View Github Repo
          </a>
        </div>
        <ul className="list-disc w-[80%] p-6">
          {curentProject?.description.map((item) => (
            <li className="p-2 text-2xl">{item}</li>
          ))}
        </ul>
      </div>
      <h3 className="text-3xl px-8 py-4">Technologies used</h3>
      <ul className="list-disc flex flex-wrap gap-20 md:gap-36 lg:gap-56 w-[80%] mx-auto px-5 ">
        {curentProject?.technologies.map((item) => (
          <li className="text-xl">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Project;

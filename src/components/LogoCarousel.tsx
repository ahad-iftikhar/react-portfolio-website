import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { ReactElement } from "react";

const logos: { id: number; logo: ReactElement }[] = [
  {
    id: 1,
    logo: <FaReact />,
  },
  {
    id: 2,
    logo: <RiTailwindCssFill />,
  },
  {
    id: 3,
    logo: <IoLogoJavascript />,
  },
  {
    id: 4,
    logo: <BiLogoTypescript />,
  },
  {
    id: 5,
    logo: <FaHtml5 />,
  },
  {
    id: 6,
    logo: <FaCss3Alt />,
  },
  {
    id: 7,
    logo: <FaNodeJs />,
  },
  {
    id: 8,
    logo: <DiMongodb />,
  },
  {
    id: 9,
    logo: <FaGitAlt />,
  },
];

function LogoCarousel() {
  return (
    <div className="w-full flex overflow-hidden">
      <div className="flex space-x-20 justify-center p-10 animate-loop-scroll ">
        {logos.map((item) => (
          <div className="text-9xl max-w-none" key={item.id}>
            {item.logo}
          </div>
        ))}
      </div>

      {/* To Stop animation jerking effect */}
      <div
        className="flex space-x-20 justify-center p-10 animate-loop-scroll"
        aria-hidden="true"
      >
        {logos.map((item) => (
          <div className="text-9xl max-w-none" key={item.id}>
            {item.logo}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoCarousel;

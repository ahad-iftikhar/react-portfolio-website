import { ReactTyped } from "react-typed";
import useTheme from "../context/themeContext";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../index.css";

function Hero() {
  const { theme } = useTheme();

  return (
    <div
      className={`h-[100vh] flex items-center flex-col justify-center ${
        theme === "dark" ? "bg-[#091E05] text-white" : "border-b-2"
      }`}
    >
      <div className="w-[60%] pt-16 md:pt-32 h-[50%] md:h-[40%] max-w-[70%] ">
        <h5 className="font-medium">Hi, My name is</h5>
        <h3 className="text-7xl font-bold mt-4 text-[#f63d6b]">
          Ahad Iftikhar.
        </h3>
        <h2 className="text-6xl mt-12">
          I'm a{" "}
          <ReactTyped
            strings={["Software Engineer", "FullStack Developer"]}
            typeSpeed={80}
            backSpeed={50}
            loop
          />
        </h2>
      </div>
      <div className="pt-24 md:pt-28 ">
        <div className="flex justify-center md:mt-16 mb-12">
          <a
            href="https://drive.google.com/file/d/18S7IbokoXtEcKLABxh8Mw3nzEVnXgCKh/view?usp=drive_link"
            target="_blank"
            className="bg-[#f63d6b] text-xl py-2 px-6 rounded-full hover:bg-[#eb2959] cursor-pointer"
          >
            Resume
          </a>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-row gap-14 text-2xl">
            <a
              href="https://www.linkedin.com/in/ahad-iftikhar-a22350288/"
              target="_blank"
              className="hover:text-[#f63d6b] cursor-pointer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ahad-iftikhar"
              target="_blank"
              className="hover:text-[#f63d6b] cursor-pointer"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/ahadiftikhar77"
              target="_blank"
              className="hover:text-[#f63d6b] cursor-pointer"
            >
              <FaXTwitter />
            </a>
            <a href="" className="hover:text-[#f63d6b] cursor-pointer">
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

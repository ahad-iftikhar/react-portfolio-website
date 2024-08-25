import { FaLinkedin, FaGithub, FaCopyright } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import useTheme from "../context/themeContext";
import { Link } from "react-router-dom";

function Footer() {
  const { theme } = useTheme();
  return (
    <div
      className={`w-full h-[40vh] flex flex-col items-center justify-between  ${
        theme === "dark" ? "bg-[#55111B] text-white" : "bg-white"
      }`}
    >
      <div className="flex flex-col items-center gap-4 mt-5">
        <h1 className="text-5xl">Get in touch</h1>
        <Link
          to="/contact"
          className="bg-[#f63d6b] text-sm py-2 px-6 rounded-full hover:bg-[#eb2959] cursor-pointer"
        >
          Contact me
        </Link>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex items-center gap-2 text-2xl p-4">
          <FaCopyright />
          <h3>Ahad Iftikhar. All rights reserved</h3>
        </div>

        <div className="flex items-center justify-center gap-6 text-2xl p-4">
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
        </div>
      </div>
    </div>
  );
}

export default Footer;

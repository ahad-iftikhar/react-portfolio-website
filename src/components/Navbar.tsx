import { FaCode } from "react-icons/fa";
import { IoSunny, IoMoonSharp } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import useTheme from "./../context/themeContext";
import { Link } from "react-router-dom";
import "../index.css";

const navItems: { id: number; name: string; link: string }[] = [
  {
    id: 1,
    name: "About",
    link: "/about",
  },
  {
    id: 2,
    name: "Projects",
    link: "/projects",
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const { theme, updateTheme } = useTheme();

  return (
    <header
      className={`shadow fixed w-full z-50 top-0 ${
        theme === "dark" ? "bg-[#091E05] text-white" : "bg-white"
      }`}
    >
      <nav className="flex justify-between items-center w-[90%] mx-auto poppins-bold h-20 text-xl">
        <Link to="/" className="flex items-center gap-2 hover:text-[#D8315B]">
          <FaCode className="text-3xl " />
          <h1 className="text-2xl">Ahad Iftikhar</h1>
        </Link>
        <ul className="hidden md:flex poppins-light gap-8 items-center">
          <button
            className="text-2xl hover:text-[#D8315B] border rounded-md p-1"
            onClick={() => updateTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <IoSunny /> : <IoMoonSharp />}
          </button>
          {navItems.map((item) => (
            <Link className="hover:text-[#D8315B]" to={item.link} key={item.id}>
              {item.name}
            </Link>
          ))}
        </ul>

        {/* Responsive Components */}
        <div className="flex justify-between gap-6 flex-wrap md:hidden">
          <button
            className="text-3xl"
            onClick={() => updateTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <IoSunny /> : <IoMoonSharp />}
          </button>
          <button className="text-3xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
          {isOpen && (
            <ul
              className={`absolute top-20 right-2 border shadow-md py-6 px-6 flex flex-col gap-4 ${
                theme === "dark" ? "bg-[#091E05] text-white" : "bg-white"
              }`}
            >
              {navItems.map((item) => (
                <Link to={item.link} className="w-32 border-b" key={item.id}>
                  {item.name}
                </Link>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

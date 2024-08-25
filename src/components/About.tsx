import { MdCastForEducation } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import useTheme from "../context/themeContext";
import { ReactElement } from "react";

const desciption: string =
  "Aspiring Software and Web Developer with a strong foundation in JavaScript, React.js and Node.js. Skilled in building dynamic web applications and passionate about problem-solving, as demonstrated by completing 50+ Leetcode challenges.";

const education = [
  {
    id: 1,
    year: "2022 - 2026",
    degree: "Bachelors of Information Technology",
    school: "University of Education",
    icon: <MdCastForEducation />,
  },
  {
    id: 2,
    year: "2020 - 2022",
    degree: "Intermediate ICS Physics",
    school: "Aspire College",
    icon: <MdCastForEducation />,
  },
  {
    id: 3,
    year: "2018 - 2020",
    degree: "Matricualtion in Computer Science",
    school: "The Trust School",
    icon: <MdCastForEducation />,
  },
];

const experience = [
  {
    id: 1,
    year: "July 2022 - September 2022",
    role: "Software Engineering Fellow",
    company: "HeadStarter AI",
    location: "New York - Remote",
    icon: <HiBuildingOffice2 />,
  },
  {
    id: 2,
    year: "July 2022 - August 2022",
    role: "FullStack Intern",
    company: "IT-Solera PVT LTD",
    location: "Islamabad, Pakistan - Remote",
    icon: <HiBuildingOffice2 />,
  },
];

function About() {
  const { theme } = useTheme();
  return (
    <div className="h-full w-full">
      <div
        className={`w-full flex items-center justify-between flex-wrap gap-8 px-14 pt-36 md:pt-44 pb-16 h-full ${
          theme === "dark" ? "bg-[#091E05] text-white" : "bg-white border-b-2"
        }`}
      >
        <div className="border-gray-200 border-t-2 border-l-2 rounded-2xl p-2 ml-4">
          <img
            src="/src/assets/photo.jpg"
            alt="Profile photo"
            className="md:w-96 rounded-xl"
          />
        </div>
        <div className="flex flex-col max-w-[40rem] flex-wrap text-wrap">
          <h1 className="text-3xl font-bold">About me</h1>
          <h3 className="text-wrap text-3xl mt-10">{desciption}</h3>
        </div>
      </div>

      {/* Education */}
      <div
        className={`h-full w-full pb-8 ${
          theme === "dark" ? "bg-[#55111B] text-white" : "bg-white border-b-2"
        } `}
      >
        <h2 className="py-20 px-8 text-6xl font-semibold">Education</h2>
        {education.map((item) => (
          <div
            key={item.id}
            className={`w-[80%] mx-auto py-8 ${
              item.id !== education.length ? "border-b" : ""
            }`}
          >
            <EducationExperienceCard
              year={item.year}
              heading={item.degree}
              subHeading={item.school}
              icon={item.icon}
            />
          </div>
        ))}
      </div>

      {/* Experience */}
      <div
        className={`h-full w-full pb-12 ${
          theme === "dark" ? "bg-[#091E05] text-white" : "bg-white border-b-2"
        } `}
      >
        <h2 className="py-20 px-8 text-6xl font-semibold">Experience</h2>
        {experience.map((item) => (
          <div
            key={item.id}
            className={`w-[80%] mx-auto py-10 ${
              item.id !== experience.length ? "border-b" : ""
            }`}
          >
            <EducationExperienceCard
              year={item.year}
              heading={item.role}
              subHeading={item.company}
              location={item.location}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;

const EducationExperienceCard = ({
  year,
  heading,
  subHeading,
  location,
  icon,
}: {
  year: string;
  heading: string;
  subHeading: string;
  location?: string;
  icon: ReactElement;
}) => {
  return (
    <div className="flex gap-4">
      <div className="text-9xl">{icon}</div>
      <div className="flex flex-col gap-1 py-2">
        <p className="text-lg">{year}</p>
        <p className="text-3xl font-medium">{heading}</p>
        <p className="text-2xl">{subHeading}</p>
        <p className="text-sm">{location}</p>
      </div>
    </div>
  );
};

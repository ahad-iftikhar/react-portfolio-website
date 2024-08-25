import { Link } from "react-router-dom";

function ProjectCard({
  name,
  slug,
  image,
}: {
  name: string;
  slug: string;
  image: string;
}) {
  return (
    <Link
      to={`/project/${slug}`}
      className="bg-gray-300 w-96 md:w-80 text-black p-4 rounded-lg flex flex-col shadow-2xl hover:bg-gray-400"
    >
      <img
        className="w-96 rounded-md mb-6 h-full"
        src={`/src/assets/${image}.png`}
        alt=""
      />
      <h3 className="text-2xl font-medium">{name}</h3>
    </Link>
  );
}

export default ProjectCard;

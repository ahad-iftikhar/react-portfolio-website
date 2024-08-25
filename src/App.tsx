import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/themeContext";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScroolToTop";

export type ProjectType = {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string[];
  technologies: string[];
  github: string;
};

function App() {
  const [theme, setTheme] = useState<string>("dark");
  const [projects, setProjects] = useState<ProjectType[]>([]);

  const updateTheme = (theme: string) => {
    setTheme(theme);
  };

  const myProjects: ProjectType[] = [
    {
      id: 1,
      name: "Blog App",
      slug: "blog-app",
      image: "project1",
      description: [
        "Developed a dynamic blog app using Appwrite as a backend.",
        "User can singup and login with complete authentication using react forms.",
        "User can create, read, edit, delete and search the posts.",
        "Used redux toolkit for state management.",
        "Used a real time editor to create posts, user can add images to posts and applied pagination to the posts. Used automatic slug transformation using post name.",
        "On home page the user can view his 4 latest posts and can logout from his account.",
      ],
      technologies: ["React.js", "Appwrite", "Tailwind CSS"],
      github: "https://www.github.com/ahad-iftikhar/BlogApp-Appwrite",
    },
    {
      id: 2,
      name: "Natours",
      slug: "natours-app",
      image: "project2",
      description: [
        "Developed an API with different routes, on which we can create, read, update, and delete different tours, users, and reviews.",
        "Implemented special routes to get tour stats etc and applied different middleware for data filterization.",
        "Implemented complete authentication using JSON-Web-Tokens on different routes so the logged-in users can only access those routes.",
      ],
      technologies: ["Node.js", "Express", "MongoDB"],
      github: "https://github.com/ahad-iftikhar/Natours",
    },
    {
      id: 3,
      name: "Word Mystery",
      slug: "word-mastery",
      image: "project3",
      description: [
        "Developed a Word guessing game.",
        "User have to guess a 5-letter word in 6 tries.",
        "User have to enter a valid 5-letter word and press enter to submit.",
        "If the word is not valid, you'll need to try again.",
        "Correct letters in the right spot turn green. Correct letters in the wrong spot turn yellow. All other letters turn gray.",
        "Guess the word correctly, and you'll see a winning pop-up with a cool rainbow effect on the game name!",
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ahad-iftikhar/WordMystery-Game",
    },
    {
      id: 4,
      name: "Blog App",
      slug: "blog-app",
      image: "project1",
      description: [
        "Developed a dynamic blog app using Appwrite as a backend.",
        "User can singup and login with complete authentication using react forms.",
        "User can create, read, edit, delete and search the posts.",
        "Used redux toolkit for state management.",
        "Used a real time editor to create posts, user can add images to posts and applied pagination to the posts. Used automatic slug transformation using post name.",
        "On home page the user can view his 4 latest posts and can logout from his account.",
      ],
      technologies: ["React.js", "Appwrite", "Tailwind CSS"],
      github: "https://www.github.com/ahad-iftikhar/BlogApp-Appwrite",
    },
    {
      id: 5,
      name: "Natours",
      slug: "natours-app",
      image: "project2",
      description: [
        "Developed an API with different routes, on which we can create, read, update, and delete different tours, users, and reviews.",
        "Implemented special routes to get tour stats etc and applied different middleware for data filterization.",
        "Implemented complete authentication using JSON-Web-Tokens on different routes so the logged-in users can only access those routes.",
      ],
      technologies: ["Node.js", "Express", "MongoDB"],
      github: "https://github.com/ahad-iftikhar/Natours",
    },
    {
      id: 6,
      name: "Word Mystery",
      slug: "word-mastery",
      image: "project3",
      description: [
        "Developed a Word guessing game.",
        "User have to guess a 5-letter word in 6 tries.",
        "User have to enter a valid 5-letter word and press enter to submit.",
        "If the word is not valid, you'll need to try again.",
        "Correct letters in the right spot turn green. Correct letters in the wrong spot turn yellow. All other letters turn gray.",
        "Guess the word correctly, and you'll see a winning pop-up with a cool rainbow effect on the game name!",
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ahad-iftikhar/WordMystery-Game",
    },
    {
      id: 7,
      name: "Blog App",
      slug: "blog-app",
      image: "project1",
      description: [
        "Developed a dynamic blog app using Appwrite as a backend.",
        "User can singup and login with complete authentication using react forms.",
        "User can create, read, edit, delete and search the posts.",
        "Used redux toolkit for state management.",
        "Used a real time editor to create posts, user can add images to posts and applied pagination to the posts. Used automatic slug transformation using post name.",
        "On home page the user can view his 4 latest posts and can logout from his account.",
      ],
      technologies: ["React.js", "Appwrite", "Tailwind CSS"],
      github: "https://www.github.com/ahad-iftikhar/BlogApp-Appwrite",
    },
    {
      id: 8,
      name: "Natours",
      slug: "natours-app",
      image: "project2",
      description: [
        "Developed an API with different routes, on which we can create, read, update, and delete different tours, users, and reviews.",
        "Implemented special routes to get tour stats etc and applied different middleware for data filterization.",
        "Implemented complete authentication using JSON-Web-Tokens on different routes so the logged-in users can only access those routes.",
      ],
      technologies: ["Node.js", "Express", "MongoDB"],
      github: "https://github.com/ahad-iftikhar/Natours",
    },
    {
      id: 9,
      name: "Word Mystery",
      slug: "word-mastery",
      image: "project3",
      description: [
        "Developed a Word guessing game.",
        "User have to guess a 5-letter word in 6 tries.",
        "User have to enter a valid 5-letter word and press enter to submit.",
        "If the word is not valid, you'll need to try again.",
        "Correct letters in the right spot turn green. Correct letters in the wrong spot turn yellow. All other letters turn gray.",
        "Guess the word correctly, and you'll see a winning pop-up with a cool rainbow effect on the game name!",
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ahad-iftikhar/WordMystery-Game",
    },
  ];

  const updateProjects = (projects: ProjectType[]) => {
    setProjects(projects);
  };

  useEffect(() => {
    updateProjects(myProjects);
  }, []);

  return (
    <ThemeProvider value={{ theme, updateTheme, projects, updateProjects }}>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

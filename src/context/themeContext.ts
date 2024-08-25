import { createContext, useContext } from "react";
import { ProjectType } from "../App";

interface ThemeContextType {
  theme: string;
  projects: ProjectType[];

  updateProjects: (projects: ProjectType[]) => void;
  updateTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  projects: [
    {
      id: 1,
      name: "",
      slug: "",
      image: "",
      description: [],
      technologies: [],
      github: "",
    },
  ],
  updateProjects() {},
  updateTheme() {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}

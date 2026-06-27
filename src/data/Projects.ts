export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  category: string;
}

export const projects: Project[] = [
  {
    title: "Housing",
    description:
      "A full-stack MERN application for house rentals with booking and authentication.",
    image: "/projects/housing.png",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
    category: "MERN Stack",
  },
  {
    title: "Campus Lost",
    description:
      "Lost & Found platform for students.",
    image: "/projects/campus.png",
    technologies: ["React", "Express", "JWT"],
    github: "#",
    live: "#",
    category: "Full Stack",
  },
  {
    title: "Foodie",
    description:
      "Food ordering website built with React.",
    image: "/projects/foodie.png",
    technologies: ["React", "Redux", "Tailwind CSS"],
    github: "#",
    live: "#",
    category: "Frontend",
  },
];
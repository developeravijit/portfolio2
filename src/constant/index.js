import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
} from "../components/SocialMedia/SocialMedia";

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Projects",
    path: "/Projects",
  },
  {
    id: 3,
    name: "Contact",
    path: "/Contact",
  },
];

const footerLinks = [
  {
    id: 1,
    icon: "icons/call.svg",
    name: "8910806300",
    link: "tel:8910806300",
  },
  {
    id: 2,
    icon: "icons/message.svg",
    name: "roysidharth1996@gmail.com",
    link: "mailto:roysidharth1996@gmail.com",
  },
];

const socialMedia = [
  {
    id: 1,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/avijit-roy-22a21a164/",
    Icon: Linkedin,
  },
  {
    id: 2,
    name: "Github",
    url: "https://github.com/developeravijit",
    Icon: Github,
  },
  {
    id: 3,
    name: "facebook",
    url: "https://www.facebook.com/avijit.roy.815747/",
    Icon: Facebook,
  },
  {
    id: 4,
    name: "Instagram",
    url: "https://www.instagram.com/avijitroy0098/",
    Icon: Instagram,
  },
];

const skills = [
  {
    id: 1,
    category: "Frontend Tools:",
    items: ["HTML, CSS, JavaScript, React"],
  },
  {
    id: 2,
    category: "Styling Tools:",
    items: ["Bootstrap, TailwindCSS"],
  },
  {
    id: 3,
    category: "Dev Tools:",
    items: ["VS Code, Git & Github"],
  },
];

const techIcon = [
  {
    id: 1,
    image: "icons/html.png",
    name: "HTML",
  },
  {
    id: 2,
    image: "icons/css.png",
    name: "CSS",
  },
  {
    id: 3,
    image: "icons/js.png",
    name: "JS",
  },

  {
    id: 4,
    image: "icons/bootstrap.png",
    name: "Bootstrap",
  },
  {
    id: 5,
    image: "icons/tailwind.png",
    name: "Tailwind",
  },
  {
    id: 6,
    image: "icons/git.png",
    name: "Git",
  },
];

export { navLinks, footerLinks, socialMedia, skills, techIcon };

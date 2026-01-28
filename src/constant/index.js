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

export { navLinks, footerLinks, socialMedia };

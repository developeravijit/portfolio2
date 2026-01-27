import {
  Facebook,
  Github,
  Instagram,
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
  },
  {
    id: 2,
    icon: "icons/message.svg",
    name: "roysidharth1996@gmail.com",
  },
];

const socialMedia = [
  {
    id: 1,
    name: "facebook",
    url: "facebook.com",
    Icon: Facebook,
  },
  {
    id: 2,
    name: "Instagram",
    url: "facebook.com",
    Icon: Instagram,
  },
  {
    id: 3,
    name: "Github",
    url: "facebook.com",
    Icon: Github,
  },
];

export { navLinks, footerLinks, socialMedia };

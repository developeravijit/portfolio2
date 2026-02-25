import { createBrowserRouter } from "react-router-dom";
import Wrapper from "../layouts/Wrapper";
import Home from "../pages/Home/Home";
import ProjectPage from "../pages/Projects/ProjectPage";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Projects",
        element: <ProjectPage />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;

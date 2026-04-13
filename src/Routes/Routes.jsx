import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Wrapper from "../layouts/Wrapper";

const Home = lazy(() => import("../pages/Home/Home"));
const ProjectPage = lazy(() => import("../pages/Projects/ProjectPage"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Login = lazy(() => import("../pages/CreateProject/Login"));
const CreateProject = lazy(
  () => import("../pages/CreateProject/CreateProject"),
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <ProjectPage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "create-project",
        element: <CreateProject />,
      },
    ],
  },
]);

export default router;

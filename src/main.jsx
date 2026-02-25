import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import Home from "./components/pages/Home/Home.jsx";
// import Contact from "./components/pages/Contact/Contact.jsx";
// import ProjectPage from "./components/pages/Projects/ProjectPage.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "Projects",
//         element: <Project />,
//       },
//       {
//         path: "Contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="" element={<Home />} />
//       <Route path="Projects" element={<ProjectPage />} />
//       <Route path="Contact" element={<Contact />} />
//     </Route>,
//   ),
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

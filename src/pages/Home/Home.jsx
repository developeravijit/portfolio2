import { lazy, Suspense } from "react";
import Loading from "../../components/loading/Loading";

const Banner = lazy(() => import("./Banner"));
const AboutMe = lazy(() => import("./AboutMe"));
const Skill = lazy(() => import("./Skill"));
const Project = lazy(() => import("./Project"));
const Experience = lazy(() => import("./Experience"));
const Certificate = lazy(() => import("./Certificate"));

const Home = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Banner />
        <AboutMe />
        <Skill />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Project />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Experience />
        <Certificate />
      </Suspense>
    </>
  );
};

export default Home;

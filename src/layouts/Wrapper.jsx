import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";

const Wrapper = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timeOut);
  }, [location]);

  return (
    <>
      {loading && <Loading />}
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default Wrapper;

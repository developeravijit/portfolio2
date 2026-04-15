import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

const Wrapper = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [location]);

  return (
    <>
      {loading && <Loading onComplete={() => setLoading(false)} />}

      <Navbar />

      {/* ✅ THIS LINE IS IMPORTANT */}
      <Outlet context={{ loading }} />

      <Footer />
    </>
  );
};

export default Wrapper;

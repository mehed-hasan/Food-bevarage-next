import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

import React from "react";
import Layout from "../components/layout/layout";
import Slider from "../components/slider/slider";
import TextBanner from "../components/banner/banner";
import HomeBanner from "../assets/SVG/HomeBanner/HomeBanner";
import HomeBannerBig from "../assets/SVG/HomeBanner/HomeBannerBig";
import Footer from "../components/footer/footer";
import { useSelector } from "react-redux";

const Home = () => {
  let { theme } = useSelector((state) => ({ ...state }));

  return (
    <Layout>
      <section id="home" className="home container">
        <div className="home-hero">
          <TextBanner />
          <HomeBanner pathColor={!theme ? "#24242a" : "#fff"} />
          <HomeBannerBig pathColor={!theme ? "#24242a" : "#fff"} />
        </div>
        <Slider />
      </section>
      <Footer />
    </Layout>
  );
};

export default Home;

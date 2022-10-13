import React from "react";
import Layout from "../components/layout/layout";
import Slider from "../components/slider/slider";
import TextBanner from "../components/banner/banner";
import HomeBanner from "../assets/SVG/HomeBanner/HomeBanner";
import HomeBannerBig from "../assets/SVG/HomeBanner/HomeBannerBig";

const Home = () => (
  <Layout>
    <section id="home" className="home container">
      <div className="home-hero">
        <TextBanner />
        <HomeBanner />
        <HomeBannerBig />
      </div>
      <Slider />
    </section>
  </Layout>
);

export default Home;

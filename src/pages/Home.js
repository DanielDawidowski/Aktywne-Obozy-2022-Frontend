import React from "react";
import Layout from "../components/layout/layout";
import Slider from "../components/slider/slider";
import Banner from "../components/banner/banner";

const Home = () => (
  <Layout>
    <section className="home container">
      <Banner />
      <Slider />
    </section>
  </Layout>
);

export default Home;

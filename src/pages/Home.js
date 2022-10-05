import React from "react";
import Layout from "../components/layout/layout";
import Logo from "../assets/SVG/Logo/Logo";

const Home = () => (
  <Layout>
    <section className="home container">
      <div className="temporery-text">
        <Logo
          mainColor={"#24242a"}
          wheelColor={"#24242a"}
          animate
          style={{ margin: "10px" }}
        />
        <p>Wracamy wkrótce :D</p>
      </div>
    </section>
  </Layout>
);

export default Home;

import React from "react";
import Logo from "../assets/SVG/Logo/Logo";

const Home = () => (
  <section className="home container">
    <div class="temporery-text">
      <Logo
        mainColor={"#24242a"}
        wheelColor={"#24242a"}
        animate
        style={{ margin: "10px" }}
      />
      <p>Wracamy wkrótce :D</p>
    </div>
  </section>
);

export default Home;

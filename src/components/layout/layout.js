import React, { useState } from "react";
import Header from "../nav/Header";
import Navigation from "../nav/Navigation";

const Layout = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="layout">
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <div className="top-nav">
        <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

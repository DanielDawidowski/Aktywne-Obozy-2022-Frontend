import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../../assets/SVG/Logo/Logo";
import Menu from "./Menu";

const Header = ({ toggleMenu, setToggleMenu }) => {
  let { user } = useSelector((state) => ({ ...state }));

  const hamburger = useRef(null);

  const handleClick = () => {};

  return (
    <header className="header container">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__list-item">
            <Link to="/">
              <Logo
                mainColor={"#24242a"}
                wheelColor={"#24242a"}
                animate
                style={{ margin: "10px" }}
              />
            </Link>
          </li>
          <li className="header__list-item header-menu">
            <Menu />
          </li>
          <div
            className="hamburger-menu"
            onClick={() => setToggleMenu(!toggleMenu)}
            ref={hamburger}
          >
            <button>
              <span style={{ background: "#24242a" }}></span>
              <span style={{ background: "#24242a" }}></span>
            </button>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

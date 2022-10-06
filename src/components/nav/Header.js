import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../../assets/SVG/Logo/Logo";
import Menu from "./Menu";

const Header = ({ toggleMenu, setToggleMenu }) => {
  let { theme } = useSelector((state) => ({ ...state }));

  const hamburger = useRef(null);

  const handleClick = () => {};

  return (
    <header className="header container">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__list-item">
            <Link to="/">
              <Logo
                mainColor={!theme ? "#24242a" : "#fff"}
                wheelColor={!theme ? "#24242a" : "#fff"}
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
              <span style={{ background: !theme ? "#24242a" : "#fff" }}></span>
              <span style={{ background: !theme ? "#24242a" : "#fff" }}></span>
            </button>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

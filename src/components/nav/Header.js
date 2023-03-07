import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../../assets/SVG/Logo/Logo";
import Menu from "./Menu";

const Header = ({ toggleMenu, setToggleMenu }) => {
  let { theme } = useSelector((state) => ({ ...state }));
  // const [small, setSmall] = useState(false);
  const hamburger = useRef(null);

  // const handleClick = () => {};

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", () =>
  //       setSmall(window.pageYOffset > 10)
  //     );
  //   }
  // }, []);
  // console.log(window.pageYOffset);

  return (
    <motion.header
      className="header container"
      // className={`header container ${small ? "small" : ""}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          ease: "easeInOut",
          duration: 1.6,
        },
      }}
      exit={{ opacity: 0, y: -20, delay: 1.5, duration: 1.6 }}
    >
      <nav className="header__nav">
        <ul className="header__list">
          <motion.li
            className="header__list-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { ease: "easeInOut", duration: 1.6 },
            }}
            exit={{ opacity: 0, x: -100 }}
          >
            <Link to="/">
              <Logo
                mainColor={!theme ? "#24242a" : "#fff"}
                wheelColor={!theme ? "#24242a" : "#fff"}
                animate
                style={{ margin: "10px" }}
              />
            </Link>
          </motion.li>
          <motion.li className="header__list-item header-menu">
            <Menu />
          </motion.li>
          <motion.div
            className="hamburger-menu"
            onClick={() => setToggleMenu(!toggleMenu)}
            ref={hamburger}
          >
            <button>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { ease: "easeInOut", duration: 1.6 },
                }}
                exit={{ opacity: 0, x: 200 }}
                style={{ background: !theme ? "#24242a" : "#fff" }}
              ></motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { ease: "easeInOut", duration: 1.6 },
                }}
                exit={{ opacity: 0, x: 20 }}
                style={{ background: !theme ? "#24242a" : "#fff" }}
              ></motion.span>
            </button>
          </motion.div>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/SVG/Logo/Logo";
import LogoutSVG from "../../assets/SVG/Logout/Logout";

const Header = () => {
  let dispatch = useDispatch();
  let { user } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = () => {};

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <header className="header container">
      <nav>
        <ul>
          <li>
            <Link to="/">
              <Logo
                mainColor={"#24242a"}
                wheelColor={"#24242a"}
                animate
                style={{ margin: "10px" }}
              />
            </Link>
          </li>
          <li>
            <h3>toggle</h3>
          </li>
          <li
          // onClick={() => handleClick()}
          >
            <Link to="/">
              <h3>Morze</h3>
            </Link>
          </li>
          <li>
            <Link to="/">
              <h3>Góry</h3>
            </Link>
          </li>
          <li>
            <Link to="/">
              <h3>Kajaki</h3>
            </Link>
          </li>
          <li>
            <Link to="/">
              <h3>Kontakt</h3>
            </Link>
          </li>
          {user && (
            <li className="logout" onClick={() => logout()}>
              <LogoutSVG color={"#24242a"} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

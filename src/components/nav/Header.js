import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/SVG/Logo/Logo";

const Header = () => {
  let dispatch = useDispatch();
  let { user } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
  };

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
            {/* <Link to="/">
              <Logo
                mainColor={"#24242a"}
                wheelColor={"#24242a"}
                animate
                style={{ margin: "10px" }}
              />
            </Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import LogoutSVG from "../../assets/SVG/Logout/Logout";

const Menu = ({ grid = false, toggleMenu, setToggleMenu }) => {
  let dispatch = useDispatch();
  let { user } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/");
    setToggleMenu(!toggleMenu);
  };

  return (
    <ul className={grid ? "menu-nav" : "menu"}>
      <li className={"menu-item"}>
        <h3>toggle</h3>
      </li>
      <li className={"menu-item"} onClick={() => setToggleMenu(!toggleMenu)}>
        {/* <Link to={"/event/kajaki"}> */}
        <Link to="/">
          <h2 style={{ color: "#24242a" }}>Spływy</h2>
        </Link>
      </li>
      <li className={"menu-item"} onClick={() => setToggleMenu(!toggleMenu)}>
        {/* <Link to="/event/gory"> */}
        <Link to="/">
          <h2 style={{ color: "#24242a" }}>Góry</h2>
        </Link>
      </li>
      <li className={"menu-item"} onClick={() => setToggleMenu(!toggleMenu)}>
        {/* <Link to="/event/morze"> */}
        <Link to="/">
          <h2 style={{ color: "#24242a" }}>Morze</h2>
        </Link>
      </li>
      <li className={"menu-item"} onClick={() => setToggleMenu(!toggleMenu)}>
        <Link to="/">
          <h2 style={{ color: "#24242a" }}>Kontakt</h2>
        </Link>
      </li>
      {user && (
        <li className="logout menu-item" onClick={() => logout()}>
          <LogoutSVG color={"#24242a"} />
        </li>
      )}
    </ul>
  );
};

export default Menu;

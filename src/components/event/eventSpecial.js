import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import PoepleIcon from "../../assets/SVG/Icons-Assured/People";
import BagIcon from "../../assets/SVG/Icons-Special/Bag";
import Clock8Icon from "../../assets/SVG/Icons-Special/clock8";
import Clock9Icon from "../../assets/SVG/Icons-Special/clock9";
import Clock10Icon from "../../assets/SVG/Icons-Special/clock10";
import Clock15Icon from "../../assets/SVG/Icons-Special/clock15";
import SafariIcon from "../../assets/SVG/Icons-Special/safari";
import CinemaIcon from "../../assets/SVG/Icons-Special/cinema";
import SwimIcon from "../../assets/SVG/Icons-Special/swim";
import IceSkateIcon from "../../assets/SVG/Icons-Special/clock15";
import LaserIcon from "../../assets/SVG/Icons-Special/laser";
import McIcon from "../../assets/SVG/Icons-Special/mcdonald";
import TrampolineIcon from "../../assets/SVG/Icons-Special/trampoline";

const EventSpecialInfo = () => {
  let { theme } = useSelector((state) => ({ ...state }));

  return (
    <motion.section
      id="event-assured"
      className="event-assured"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { ease: "easeInOut", duration: 1.6 },
      }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="event-assured__title">
        <h1>Ramowy harmonogram półkolonii</h1>
      </div>
      <div className="event-assured__content">
        <div className="event-assured__item">
          <h1>Organizowane zajęcia:</h1>
        </div>
        <div
          className="event-assured__item"
          style={{ background: theme ? "#24242a" : "#fff" }}
        >
          <span>
            <CinemaIcon />
            <h4>Kino</h4>
          </span>
        </div>
        <div
          className="event-assured__item"
          style={{ background: theme ? "#24242a" : "#fff" }}
        >
          <span>
            <IceSkateIcon />
            <h4>Lodowisko</h4>
          </span>
        </div>
        <div
          className="event-assured__item"
          style={{ background: theme ? "#24242a" : "#fff" }}
        >
          <span>
            <TrampolineIcon />
            <h4>Park Trampolin</h4>
          </span>
        </div>
        <div
          className="event-assured__item"
          style={{ background: theme ? "#24242a" : "#fff" }}
        >
          <span>
            <McIcon />
            <h4>McDonalds</h4>
          </span>
        </div>
        <div
          className="event-assured__item"
          style={{ background: theme ? "#24242a" : "#fff" }}
        >
          <span>
            <SwimIcon />
            <h4>Zajęcia na basenie</h4>
          </span>
        </div>
        <div
          className="event-assured__item"
          style={{ background: theme ? "#24242a" : "#fff" }}
        >
          <span>
            <LaserIcon />
            <h4>Laser Tag</h4>
          </span>
        </div>
      </div>
    </motion.section>
  );
};

export default EventSpecialInfo;

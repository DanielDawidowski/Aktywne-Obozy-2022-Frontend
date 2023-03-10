import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import PinIcon from "../../assets/SVG/Icons-Info/Pin";
import WebIcon from "../../assets/SVG/Icons-Info/Web";
import BursaImg from "../../assets/Images/bursa.jpg";
import CinemaIcon from "../../assets/SVG/Icons-Special/cinema";
import SwimIcon from "../../assets/SVG/Icons-Special/swim";
import LaserIcon from "../../assets/SVG/Icons-Special/laser";
import McIcon from "../../assets/SVG/Icons-Special/mcdonald";
import TrampolineIcon from "../../assets/SVG/Icons-Special/trampoline";
import KajakImg from "../../assets/Images/kajak.jpeg";
import KolejImg from "../../assets/Images/kolej.jpg";
import RejsImg from "../../assets/Images/rejs.jpg";
import GolebiewskiImg from "../../assets/Images/golebiewski.jpg";

function EventPolkolonie() {
  let { theme } = useSelector((state) => ({ ...state }));
  return (
    <>
      <div
        className="event-info__element"
        style={{
          border: !theme ? "2px solid #24242a" : "1px solid #4d908e",
        }}
      >
        <div className="event-info__content">
          <h3>Miejsce zakwaterowania</h3>
          <span>
            <PinIcon />
            <h4>Bursa Szkolna w Ełku ul. Sikorskiego 7a</h4>
          </span>
          <span>
            <WebIcon />
            <a target="_blank" href="https://bursa.elk.pl">
              www.bursa.elk.pl
            </a>
          </span>
        </div>

        <div className="event-info__image">
          <motion.img src={BursaImg} alt={BursaImg} />
        </div>
      </div>
      <div
        className="event-info__element"
        style={{
          border: !theme ? "2px solid #24242a" : "1px solid #4d908e",
        }}
      >
        <div className="event-info__content">
          <span>
            <h4>Wycieczka Koleją Wąskotorową</h4>
          </span>
        </div>
        <div className="event-info__image">
          <motion.img src={KolejImg} alt={KolejImg} />
        </div>
      </div>
      <div
        className="event-info__element"
        style={{
          border: !theme ? "2px solid #24242a" : "1px solid #4d908e",
        }}
      >
        <div className="event-info__content">
          <span>
            <h4>Rejs statkiem Augustów</h4>
          </span>
        </div>
        <div className="event-info__image">
          <motion.img src={RejsImg} alt={RejsImg} />
        </div>
      </div>
      <div
        className="event-info__element"
        style={{
          border: !theme ? "2px solid #24242a" : "1px solid #4d908e",
        }}
      >
        <div className="event-info__content">
          <span>
            <h1>Spływ kajakowy rzeką Ełk</h1>
          </span>
        </div>
        <div className="event-info__image">
          <motion.img src={KajakImg} alt={KajakImg} />
        </div>
      </div>
      <div
        className="event-info__element"
        style={{
          border: !theme ? "2px solid #24242a" : "1px solid #4d908e",
        }}
      >
        <div className="event-info__content">
          <span>
            <h4>Aqua Park w Hotelu Gołębiewski w Mikołajkach</h4>
          </span>
        </div>
        <div className="event-info__image">
          <motion.img src={GolebiewskiImg} alt={GolebiewskiImg} />
        </div>
      </div>
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
        <div className="event-assured__content">
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
              <TrampolineIcon />
              <h4>Park Trampolin</h4>
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
              <h4>Laser Tag i Paintball</h4>
            </span>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default EventPolkolonie;

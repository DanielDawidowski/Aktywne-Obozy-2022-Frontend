import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import PinIcon from "../../assets/SVG/Icons-Info/Pin";
import WebIcon from "../../assets/SVG/Icons-Info/Web";
import SportIcon from "../../assets/SVG/Icons-Info/Sport";
import SlideIcon from "../../assets/SVG/Icons-Info/Slide";
import SkiIcon from "../../assets/SVG/Icons-Info/Ski";
import SnowboardIcon from "../../assets/SVG/Icons-Info/Snowboard";
import SkiImg from "../../assets/Images/ski.png";
import MountainIcon from "../../assets/SVG/Mountain/Mountain";
import GalicowkaLogo from "../../assets/Images/galicowka-logo.png";
import EnergylandiaImg from "../../assets/Images/energylandia.jpg";
import GalicowkaImg from "../../assets/Images/galicowka-male-ciche.jpg";
import BukovinaImg from "../../assets/Images/bukovina.jpg";
import RusinowaImg from "../../assets/Images/rusinowa.png";

function EventGory() {
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
            <img
              className="event-info__logo"
              src={GalicowkaLogo}
              alt={GalicowkaLogo}
            />
          </span>
          <span>
            <PinIcon />
            <h4>Galicówka, Małe Ciche 67, 34-531 Małe Ciche</h4>
          </span>
          <span>
            <WebIcon />
            <a target="_blank" rel="noreferrer" href="https://galicowka.com.pl">
              www.galicowka.com.pl
            </a>
          </span>
        </div>
        <div className="event-info__image">
          <motion.img src={GalicowkaImg} alt={GalicowkaImg} />
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
            <MountainIcon />
            <h4>zajęcia plenerowe</h4>
          </span>
          <span>
            <SlideIcon />
            <h4>baseny termalne</h4>
          </span>
          <span>
            <SportIcon />
            <h4>gry sportowe</h4>
          </span>
        </div>
        <div className="event-info__image">
          <motion.img src={BukovinaImg} alt={BukovinaImg} />
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
            <SnowboardIcon />
            <h4>szkolenie narciarskie i snowboardowe</h4>
          </span>
          <span>
            <SkiIcon />
            <h4>SKIPASS</h4>
          </span>
        </div>
        <div className="event-info__image">
          <motion.img src={SkiImg} alt={SkiImg} />
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
            <h3>Wycieczki krajoznawczo turystyczne</h3>
          </span>
          <span>
            <h4>Morskie Oko</h4>
          </span>
          <span>
            <h4>Rusinowa Polana</h4>
          </span>
          <span>
            <h4>Wielka Krokiew</h4>
          </span>
          <span>
            <h4>Gubałówka</h4>
          </span>
          <span>
            <h4>Zwiedzanie Zakopanego,</h4>
          </span>
          <span>
            <h4>Zamek w Niedzicy i Czorsztynie</h4>
          </span>
          <span>
            <h4>Kino</h4>
          </span>
        </div>
        <div className="event-info__image">
          <motion.img src={RusinowaImg} alt={RusinowaImg} />
        </div>
      </div>

      {/* <div
        className="event-info__element"
        style={{
          border: !theme ? "2px solid #24242a" : "1px solid #4d908e",
        }}
      >
        <div className="event-info__content">
          <span>
            <h3>Całodniowa wycieczka do Enerylandii</h3>
          </span>
        </div>
        <div className="event-info__image">
          <motion.img src={EnergylandiaImg} alt={EnergylandiaImg} />
        </div>
      </div> */}
    </>
  );
}

export default EventGory;

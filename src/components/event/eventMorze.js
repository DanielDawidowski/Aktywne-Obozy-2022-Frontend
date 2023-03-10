import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import LazurLogo from "../../assets/Images/lazur-logo.png";
import LazurImg from "../../assets/Images/lazur.jpg";
import LebaImg from "../../assets/Images/leba.jpg";
import MalborkImg from "../../assets/Images/malbork.jpg";
import BunkryImg from "../../assets/Images/bunkry.jpg";
import ParkImg from "../../assets/Images/park.jpg";
import UstkaImg from "../../assets/Images/ustka.jpg";
import PinIcon from "../../assets/SVG/Icons-Info/Pin";
import WebIcon from "../../assets/SVG/Icons-Info/Web";
import SlideIcon from "../../assets/SVG/Icons-Info/Slide";
import SportIcon from "../../assets/SVG/Icons-Info/Sport";
import MountainIcon from "../../assets/SVG/Mountain/Mountain";
import BukovinaImg from "../../assets/Images/bukovina.jpg";

function EventMorze() {
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
            <img className="event-info__logo" src={LazurLogo} alt={LazurLogo} />
          </span>
          <span>
            <PinIcon />
            <h4>Ośrodek Wypoczynkowy LAZUR</h4>
          </span>
          <span>
            <WebIcon />
            <a target="_blank" href="http://www.lazurosrodki.pl/lazur">
              www.lazurosrodki.pl
            </a>
          </span>
        </div>
        <div className="event-info__image">
          <motion.img src={LazurImg} alt={LazurImg} />
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
            <h4>zajęcia plenerowe - survival</h4>
          </span>
          <span>
            <SlideIcon />
            <h4>Aqua Park</h4>
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
        <div className="event-info__image">
          <motion.img src={BunkryImg} alt={BunkryImg} />
        </div>
        <div className="event-info__content">
          <span>
            <h4>Bunkry Bluchera</h4>
          </span>
          <span>
            <h4>Ustka</h4>
          </span>
        </div>
        <div className="event-info__image">
          <motion.img src={UstkaImg} alt={UstkaImg} />
        </div>
      </div>

      <div
        className="event-info__element"
        style={{
          border: !theme ? "2px solid #24242a" : "1px solid #4d908e",
        }}
      >
        <div className="event-info__image">
          <motion.img src={LebaImg} alt={LebaImg} />
        </div>
        <div className="event-info__content">
          <span>
            <h4>Łeba</h4>
          </span>
          <span>
            <h4>Zamek w Malborku</h4>
          </span>
        </div>
        <div className="event-info__image">
          <motion.img src={MalborkImg} alt={MalborkImg} />
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
            <h4>Wycieczka do Słowińskiego Parku Narodowego </h4>
          </span>
        </div>
        <div className="event-info__image">
          <motion.img src={ParkImg} alt={ParkImg} />
        </div>
      </div>
    </>
  );
}

export default EventMorze;

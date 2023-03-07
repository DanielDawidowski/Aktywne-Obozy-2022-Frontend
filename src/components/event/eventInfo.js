import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Modal from "../../components/modal/modal";
import EventGory from "./eventGory";

import BonImg from "../../assets/Images/bon.jpeg";
// import EyeIcon from "../../assets/SVG/Eye/Eye";

const EventInfo = ({ typeEvent }) => {
  const [isToggled, setToggle] = useState(false);

  let { theme } = useSelector((state) => ({ ...state }));

  return (
    <>
      <section id="event-info">
        <div className="event-info container">
          {typeEvent === "gory" && <EventGory />}
          <div
            className="event-info__element"
            style={{
              border: !theme ? "2px solid #24242a" : "1px solid #4d908e",
            }}
          >
            <div className="event-info__content">
              <span>
                <h3>Realizujemy BONY TURYSTYCZNE.</h3>
              </span>
            </div>
            <div className="event-info__image">
              <motion.img src={BonImg} alt={BonImg} />
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
                <h3>Osoby które nie wykorzystały BONU TURYSTYCZNEGO</h3>
              </span>
              <span>
                <h3>
                  Mogą go zrealizować u Nas w formie zaliczki za dany turnus do
                  30 marca!!!
                </h3>
              </span>
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
                <h3>OFERTA SPECJALNA!!!</h3>
              </span>
              <span>
                <h3>
                  Osoby, które zarezerwują miejsce i opłacą składkę członkowską
                  do 30 marca zapłacą 100 zł mniej za turnus.
                </h3>
              </span>
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
                <h4>Wszystkie atrakcje wliczone sa w cenę</h4>
              </span>
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
                <h4>Zgłoszenie do Kuratorium Oświaty</h4>
              </span>
            </div>
          </div>
          {/* <div className="event-info__element">
            <div className="event-info__content">
              <span onClick={() => setToggle(true)}>
                <h4 style={{ marginRight: "8px" }}>Harmonogram wyjazdu</h4>
                <EyeIcon />
              </span>
            </div>
          </div> */}
        </div>
      </section>
      <Modal isToggled={isToggled} setToggle={setToggle}>
        <div className="event-info__modal">
          <h1>yo madafakas</h1>
        </div>
      </Modal>
    </>
  );
};

export default EventInfo;

import React, { useRef, useEffect, useState } from "react";
import { getEventsByCount } from "../../functions/event";
import { motion } from "framer-motion";
import Tent from "../../assets/SVG/Tent/Tent";
import Card from "../card/card";
// import Logo from "../../assets/SVG/Logo/Logo";
import Logo from "../../assets/Images/logo.png";

const Footer = () => {
  const [width, setWidth] = useState(0);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const carousel = useRef();

  useEffect(() => {
    loadAllEvents();
  }, []);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    // console.log(events);
  }, []);

  const loadAllEvents = () => {
    setLoading(true);
    getEventsByCount(4)
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const mappedEvents = events
    .sort((a, b) => {
      if (a.status !== "Aktualne" && b.status === "Aktualne") {
        return 1; // 'a' comes before 'b'
      } else if (a.status === "Aktualne" && b.status !== "Aktualne") {
        return -1; // 'b' comes before 'a'
      } else {
        return 0; // no change in order
      }
    })
    .slice(0, 3);

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          ease: "easeInOut",
          duration: 1.8,
        },
      }}
      exit={{
        opacity: 0,
        y: 100,
        transition: {
          duration: 1.8,
        },
      }}
      // style={}
      // theme === false
      //   ? {
      //       borderBottom: "1px solid #24242a",
      //       animation: "animate 1s linear",
      //     }
      //   : { borderBottom: "1px solid #fff", animation: "animate 1s linear" }
    >
      <div className="container footer__nav">
        <div className="footer__nav-top">
          <h1>Nadchodzące wyjazdy</h1>
        </div>
        <div className="footer__nav-bottom">
          <div className="footer__tent">
            <Tent />
          </div>
          <motion.div className="white-line small"></motion.div>
          <motion.div className="white-line big"></motion.div>
          <motion.div
            ref={carousel}
            className="carousel"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              drag="y"
              dragConstraints={{ bottom: 0, top: -width }}
              className="carousel__inner small"
            >
              {mappedEvents
                .sort((a, b) => Number(a.startDate) - Number(b.startDate))
                .map((e, i) => {
                  return <Card event={e} key={i} />;
                })}
            </motion.div>
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="carousel__inner big"
            >
              {mappedEvents.map((e, i) => (
                <Card event={e} key={i} />
              ))}
            </motion.div>
          </motion.div>
          <motion.div className="footer__logo">
            <motion.img className="header__logo" src={Logo} alt="logo" />
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

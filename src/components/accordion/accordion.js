import React, { useState } from "react";
import { motion } from "framer-motion";
import MountainIcon from "../../assets/SVG/Mountain/Mountain";
import KayakIcon from "../../assets/SVG/Kayaks/Kayaks";
import CrabIcon from "../../assets/SVG/Crab/Crab";
import CalendarIcon from "../../assets/SVG/Calendar/Calendar";

const iconsArray = [
  {
    typeEvent: "gory",
    src: <MountainIcon />,
  },
  {
    typeEvent: "splywy",
    src: <KayakIcon />,
  },
  {
    typeEvent: "morze",
    src: <CrabIcon />,
  },
];

const Accordion = ({ details, expanded, setExpanded, children }) => {
  const { _id, name, typeEvent, status, startDate } = details;
  const isOpen = _id === expanded;
  // const [hovered, setHovered] = useState(false);

  const showIcon = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (typeEvent === arr[i].typeEvent) return arr[i].src;
    }
  };

  const showDate = (date) => {
    let year = date && date.substring(0, 4);
    let mounth = date && date.substring(5, 7);
    let day = date && date.substring(-1, 2);
    // let d = date && date.replaceAll("-", " ");

    return `${day} ${mounth} ${year}`;
  };

  return (
    <motion.div className="accordion">
      <motion.div
        className="accordion__header"
        // onHoverStart={() => setHovered(!hovered)}
        // onHoverEnd={() => setHovered(!hovered)}
        onClick={() => setExpanded(isOpen ? false : _id)}
      >
        {/* <h1>siema</h1> */}
        {showIcon(iconsArray)}
        <div className="accordion__title">
          <motion.div animate={{ y: isOpen ? 20 : 40 }}>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { ease: "easeInOut", duration: 4.6 },
              }}
              exit={{ opacity: 0 }}
            >
              {name}
            </motion.h3>
          </motion.div>
          {isOpen && status === "Aktualne" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { ease: "easeInOut", duration: 1.6 },
              }}
              className="accordion__icon"
            >
              <CalendarIcon colorArrow="green" />
              <div className="accordion__date">
                <h4>Zaczynamy:</h4>
                <h4>{showDate(startDate)}</h4>
              </div>
            </motion.div>
          ) : null}
        </div>
      </motion.div>
      <motion.div
        key="content"
        initial={{ height: isOpen ? "100%" : "0" }}
        className="accordion__content"
        animate={{ height: isOpen ? "100%" : "0" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Accordion;

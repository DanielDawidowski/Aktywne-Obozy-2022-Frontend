import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import HealthCareIcon from "../../assets/SVG/Icons-Assured/HealthCare";
import PoepleIcon from "../../assets/SVG/Icons-Assured/People";
import TransportIcon from "../../assets/SVG/Icons-Assured/Transport";
import InsuranceIcon from "../../assets/SVG/Icons-Assured/Insurance";
import HotelIcon from "../../assets/SVG/Icons-Assured/Hotel";

const EventAssured = ({ hotel = false }) => {
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
        <h1>Organizator zapewnia:</h1>
      </div>
      <div className="event-assured__content">
        <div
          className="event-assured__item"
          style={{ background: theme ? "#24242a" : "#fff" }}
        >
          <span>
            <PoepleIcon />
            <h4>opiekę wykwalifikowanej kadry pedagogicznej</h4>
          </span>
        </div>
        <div
          className="event-assured__item"
          style={{ background: theme ? "#24242a" : "#fff" }}
        >
          <span>
            <HealthCareIcon />
            <h4>opiekę medyczną</h4>
          </span>
        </div>
        {hotel && (
          <div
            className="event-assured__item"
            style={{ background: theme ? "#24242a" : "#fff" }}
          >
            <span>
              <HotelIcon />
              <h4>nocleg i wyżywienie</h4>
            </span>
          </div>
        )}
        <div
          className="event-assured__item"
          style={{ background: theme ? "#24242a" : "#fff" }}
        >
          <span>
            <TransportIcon />
            <h4>transport</h4>
          </span>
        </div>
        <div
          className="event-assured__item"
          style={{ background: theme ? "#24242a" : "#fff" }}
        >
          <span>
            <InsuranceIcon />
            <h4>ubezpieczenie NNW</h4>
          </span>
        </div>
      </div>
    </motion.section>
  );
};

export default EventAssured;

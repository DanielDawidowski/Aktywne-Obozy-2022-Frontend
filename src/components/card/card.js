import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card = ({ event, isOpen }) => {
  // destructure
  const {
    // name,
    slug,
    status,
    // description,
    typeEvent,
  } = event;
  // console.log(typeEvent);

  return (
    <motion.div
      className="card"
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.9 }}
    >
      {/* <MountainIcon /> */}
      {/* <KayakIcon /> */}
      {status === "Aktualne" ? (
        <Link
          style={{ textDecoration: "none" }}
          to={`/event/${typeEvent}/${slug}`}
        >
          <h4 style={{ color: "green" }}>Zapisz się</h4>
        </Link>
      ) : (
        <h4 style={{ color: "red" }}>Zakończony</h4>
      )}
    </motion.div>
  );
};

export default Card;

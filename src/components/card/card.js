import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { showIcon } from "../../functions/utils";

const Card = ({ event }) => {
  // destructure
  const {
    name,
    slug,
    status,
    // description,
    typeEvent,
  } = event;
  // console.log(typeEvent);

  return (
    <motion.div
      className={"card"}
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.9 }}
    >
      {/* <MountainIcon /> */}
      {/* <KayakIcon /> */}
      {showIcon(typeEvent)}
      <div className="card__content">
        <h4>{name}</h4>
        {status === "Aktualne" ? (
          <Link
            style={{ textDecoration: "none" }}
            to={`/event/${typeEvent}/${slug}`}
          >
            <h5>Aktualne</h5>
          </Link>
        ) : (
          <h5 style={{ color: "red" }}>Zakończony</h5>
        )}
      </div>
    </motion.div>
  );
};

export default Card;

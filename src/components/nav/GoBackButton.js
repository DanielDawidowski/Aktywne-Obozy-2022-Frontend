import React from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import GoBackIcon from "../../assets/SVG/GoBack/GoBack";

const GoBackButton = ({ mediaQuery = false }) => {
  let history = useHistory();
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { ease: "easeInOut", duration: 1.6 },
      }}
      exit={{ opacity: 0, x: -20 }}
      style={{
        cursor: "pointer",
        marginTop: mediaQuery ? "36px" : "0px",
        marginRight: mediaQuery ? "0px" : "16px",
        height: "100%",
      }}
      className={mediaQuery ? "go-back-btn small" : "go-back-btn big"}
      onClick={() => history.goBack()}
    >
      <GoBackIcon />
    </motion.div>
  );
};

export default GoBackButton;

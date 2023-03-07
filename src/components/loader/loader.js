import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import LogoIcon from "../../assets/SVG/Logo/Logo";

//Variants
const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, x: 200 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Loader = ({ setLoading }) => {
  let { theme } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  });
  
  return (
    <div className="loader">
      <motion.div
        className="loader-inner"
        variants={container}
        onAnimationComplete={() => setLoading(false)}
      >
        <motion.div
          className="transition-image"
          variants={itemMain}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <motion.h1 layoutId="main-image-1">
            <LogoIcon
              mainColor={!theme ? "#24242a" : "#fff"}
              wheelColor={!theme ? "#24242a" : "#fff"}
              animate
            />
          </motion.h1>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;

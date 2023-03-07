import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import slide1 from "../../assets/Images/filip-mroz-zK049OFP4uI-unsplash 1.png";
import slide2 from "../../assets/Images/piotr-majcher-cRzcTyM70Q0-unsplash 1.png";
import slide3 from "../../assets/Images/sebastien-goldberg-BKLHxgbYFDI-unsplash 2.png";
import slide4 from "../../assets/Images/home-ski-big.png";

import SlideSmall1 from "../../assets/Images/filip-mroz-zK049OFP4uI-small.png";
import SlideSmall2 from "../../assets/Images/piotr-majcher-cRzcTyM70Q0-small.png";
import SlideSmall3 from "../../assets/Images/sebastien-goldberg-BKLHxgbYFDI-small.png";
import SlideSmall4 from "../../assets/Images/home-ski-small.png";

const imagesBig = [slide1, slide2, slide3, slide4];

const imagesSmall = [SlideSmall1, SlideSmall2, SlideSmall3, SlideSmall4];

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      rotate: 90,

      // scale: 0.5,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    rotate: 0,
    // scale: 1,
    // transition: 'ease-in',
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -500 : 500,
      opacity: 0,
      rotate: -90,
      // scale: 0.5,
      // transition: 'ease-in',
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function nextStep() {
    setDirection(1);
    if (index === 4 - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (index === 0) {
      setIndex(4 - 1);
      return;
    }
    setIndex(index - 1);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20, y: -20 }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: { ease: "easeInOut", duration: 1.6 },
      }}
      exit={{ opacity: 0, x: 20 }}
      className="slideshow container"
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
          src={imagesBig[index]}
          alt={imagesSmall[index]}
          className="slides big"
          key={imagesBig[index]}
          custom={direction}
        />
        {/* </AnimatePresence>

        <AnimatePresence initial={false} custom={direction}> */}
        <motion.img
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
          src={imagesSmall[index]}
          alt={imagesSmall[index]}
          className="slides small"
          key={imagesSmall[index]}
          custom={direction}
        />
      </AnimatePresence>
      <button className="slider-btn prevButton" onClick={prevStep}>
        ◀
      </button>
      <button className="slider-btn nextButton" onClick={nextStep}>
        ▶
      </button>
    </motion.div>
  );
};

export default Slider;

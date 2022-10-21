import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout/layout";

const Test = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <Layout>
      <div className="test">
        <motion.div
          ref={ref}
          className="box"
          animate={{ x, y }}
          transition={{
            type: "spring",
            damping: 3,
            stiffness: 50,
            restDelta: 0.001,
          }}
        />
      </div>
    </Layout>
  );
};

export default Test;

const useFollowPointer = (ref) => {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return point;
};

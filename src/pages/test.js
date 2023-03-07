import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout/layout";
import Logo from "../assets/SVG/Logo/Logo";
import BookData from "../data.json";
import SearchBar from "../components/search/Search";

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

const Test = () => {
  // return (
  //   <div className="container">
  //     <SearchBar placeholder="Enter a Book Name..." data={BookData} />
  //   </div>
  // );
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    // <Layout>
    <div className="test container">
      <div className="test-info">
        <Logo
          mainColor={"#24242a"}
          wheelColor={"#24242a"}
          animate
          style={{ margin: "10px" }}
        />
        <h1>Wracamy wkrótce :-D</h1>
      </div>
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
    // </Layout>
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

//////

// import React from "react";
// import { motion } from "framer-motion";
// function onUpdate(latest) {
//   console.log(latest.x, latest.opacity);
// }
// export default function App() {
//   return (
//     <motion.div
//       onUpdate={onUpdate}
//       animate={{ x: 100, opacity: 0 }}
//       style={{ backgroundColor: "red", width: 100, height: 100 }}
//     ></motion.div>
//   );
// }

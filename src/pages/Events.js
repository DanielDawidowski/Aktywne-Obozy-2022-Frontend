import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/layout/layout";
import { getEventsByCount } from "../functions/event";
import Card from "../components/card/card";
import Accordion from "../components/accordion/accordion";
import imageGoryLeft from "../assets/Images/holly-mandarich.png";
import imageSplywyLeft from "../assets/Images/tim-foster.png";
import imageMorzeLeft from "../assets/Images/hermansyah.png";
import imageGoryRight from "../assets/Images/gory.png";
import imageSplywyRight from "../assets/Images/splywy.png";
import imageMorzeRight from "../assets/Images/morze.png";

const typesEvents = [
  {
    typeEvent: "gory",
    title: "Góry",
    imageleft: imageGoryLeft,
    imageRight: imageGoryRight,
  },
  {
    typeEvent: "splywy",
    title: "Spływy",
    imageleft: imageSplywyLeft,
    imageRight: imageSplywyRight,
  },
  {
    typeEvent: "morze",
    title: "Morze",
    imageleft: imageMorzeLeft,
    imageRight: imageMorzeRight,
  },
];

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  let location = useLocation();

  let eventPath = location.pathname.slice(1);
  let typeEvent = eventPath.substring(eventPath.lastIndexOf("/")).slice(1);
  console.log(typeEvent);

  const showEvent = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (typeEvent === arr[i].typeEvent) return arr[i].title;
    }
  };

  const showImageLeft = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (typeEvent === arr[i].typeEvent) {
        return <motion.img src={arr[i].imageleft} />;
      }
    }
  };

  const showImageRight = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (typeEvent === arr[i].typeEvent) {
        return <motion.img src={arr[i].imageRight} />;
      }
    }
  };

  let { theme } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadAllEvents();
    // console.log("EVENTS ----", events);
  }, []);

  const loadAllEvents = () => {
    setLoading(true);
    getEventsByCount(100)
      .then((res) => {
        console.log(res.data);
        setEvents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <Layout>
      <section id="events">
        <div className="events container">
          <div className="events__image">{showImageLeft(typesEvents)}</div>
          <div className="events__list">
            {loading ? (
              <h3 style={{ color: "red" }}>...loading</h3>
            ) : (
              <h1 className="events__title">{showEvent(typesEvents)}</h1>
            )}
            {events &&
              events.map((e, i) => {
                return (
                  e.typeEvent === typeEvent && (
                    <motion.div
                      key={i}
                      className="events__list-item"
                      initial={{ height: 0 }}
                      animate={{
                        height: isOpen && "100%",
                      }}
                    >
                      <AnimatePresence>
                        <Accordion
                          details={e}
                          expanded={expanded}
                          setExpanded={setExpanded}
                        >
                          <Card event={e} isOpen />
                        </Accordion>
                      </AnimatePresence>
                    </motion.div>
                  )
                );
              })}
          </div>
          <div className="events__right">{showImageRight(typesEvents)}</div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;

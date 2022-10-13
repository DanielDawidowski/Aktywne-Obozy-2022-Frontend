import React, { useRef, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

// import { motion } from "framer-motion";
import Layout from "../components/layout/layout";
import { getEventsByCount } from "../functions/event";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  let location = useLocation();

  let eventPath = location.pathname.slice(1);
  let eventType = eventPath.substring(eventPath.indexOf("/"));
  let eventName = eventType.slice(1);
  console.log(eventName);

  let { theme } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadAllEvents();
    // console.log("EVENTS ----", events);
  }, []);

  const loadAllEvents = () => {
    setLoading(true);
    getEventsByCount(100)
      .then((res) => {
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
      <section id="events" className="events container">
        {loading ? (
          <h3 style={{ color: "red" }}>...loading</h3>
        ) : (
          <h3>Events</h3>
        )}
        {events &&
          events.map((e, i) => {
            return (
              e.typeEvent === eventName && (
                <Link key={i} to={`/event/${eventName}/${e.slug}`}>
                  <h3 style={{ color: !theme ? "#24242a" : "#fff" }}>
                    {e.name}
                  </h3>
                </Link>
              )
            );
          })}
      </section>
    </Layout>
  );
};

export default Events;

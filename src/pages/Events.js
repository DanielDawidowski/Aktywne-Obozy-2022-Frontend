import React, { useRef, useEffect, useState } from "react";
// import { motion } from "framer-motion";
import Layout from "../components/layout/layout";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { createClient } from "../functions/client";
import { getEventsByCount } from "../functions/event";
import ClientCreateForm from "../components/forms/ClientCreateForm";

const initialState = {
  name: "",
  email: "",
  phone: "",
  age: "",
};

const Events = () => {
  const [values, setValues] = useState(initialState);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  let location = useLocation();

  let eventType = location.pathname.slice(1);
  // console.log(eventType);

  useEffect(() => {
    loadAllEvents();
    // console.log("EVENTS ----", events);
  }, []);

  const loadAllEvents = () => {
    setLoading(true);
    getEventsByCount(3)
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  let clientName = values.name;
  let clientEmail = values.email;
  let clientPhone = values.phone;
  let clientAge = values.age;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);

    const createClientData = {
      name: clientName,
      email: clientEmail,
      phone: clientPhone,
      age: clientAge,
    };

    createClient(createClientData)
      .then((res) => {
        console.log(res);
        toast.success(`Dodano ${res.data.name}`);
        setValues({ name: "", email: "", phone: "", age: "", eventName: "" });
        loadAllEvents();
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400) toast.error(err.response.data);
        console.error(err.response.data.err);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  return (
    <Layout>
      <section id="event" className="event container">
        {loading ? (
          <h3 style={{ color: "red" }}>...loading</h3>
        ) : (
          <h3>Events</h3>
        )}
        {events &&
          events.map((e, i) => {
            return e.typeEvent === eventType && <h1 key={i}>{e.name}</h1>;
          })}
        <ClientCreateForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          values={values}
          setValues={setValues}
        />
      </section>
    </Layout>
  );
};

export default Events;

// function onTap(event, info) {
//   console.log(info.point.x, info.point.y);
// }

// <motion.div class="event-hero">
//         <motion.div
//           onTap={onTap}
//           onHoverStart={() => console.log("Hover starts")}
//           onHoverEnd={() => console.log("Hover ends")}
//           style={{ backgroundColor: "red", width: 100, height: 100 }}
//         ></motion.div>
//       </motion.div>

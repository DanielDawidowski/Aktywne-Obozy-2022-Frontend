import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { createClient } from "../functions/client";
import { createClientEmail, createAuthorEmail } from "../functions/email";

import { getEvent } from "../functions/event";
import ClientCreateForm from "../components/forms/ClientCreateForm";
import Layout from "../components/layout/layout";
import GoBackButton from "../components/nav/GoBackButton";
import imageGory from "../assets/Images/gory-event.png";
import imageSplywy from "../assets/Images/splywy-event.png";
import imageMorze from "../assets/Images/morze-event.png";
import image1 from "../assets/Images/ski.png";
import CalendarIcon from "../assets/SVG/Calendar/Calendar";
import KayakIcon from "../assets/SVG/Kayaks/Kayaks";
import CrabIcon from "../assets/SVG/Crab/Crab";
import MountainIcon from "../assets/SVG/Mountain/Mountain";
import Modal from "../components/modal/modal";

const typesEvents = [
  {
    typeEvent: "gory",
    image: imageGory,
    icon: <MountainIcon />,
  },
  {
    typeEvent: "splywy",
    image: imageSplywy,
    icon: <KayakIcon />,
  },
  {
    typeEvent: "morze",
    image: imageMorze,
    icon: <CrabIcon />,
  },
];

const initialState = {
  name: "",
  email: "",
  phone: "",
  age: "",
};

const Event = () => {
  const [values, setValues] = useState(initialState);
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(false);
  const [isToggled, setToggle] = useState(false);

  let location = useLocation();

  let history = useHistory();

  let eventPath = location.pathname.slice(1);
  let eventType = eventPath.substring(eventPath.lastIndexOf("/")).slice(1);

  // destructure
  const { _id, name, description, price, typeEvent, startDate, endDate } =
    event;

  let { theme } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadEvent();
  }, []);

  const loadEvent = () => {
    setLoading(true);
    getEvent(eventType)
      .then((res) => {
        setEvent(res.data);
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
      eventName: name,
      event: _id,
      price: price,
    };

    const createEmailData = {
      name: clientName,
      email: clientEmail,
      phone: clientPhone,
      eventName: name,
    };

    createClient(createClientData)
      .then((res) => {
        createClientEmail(createEmailData);
        createAuthorEmail(createEmailData);
        toast.success(`Dodano ${res.data.name}`);
        setValues({ name: "", email: "", phone: "", age: "" });
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

  function showEventImage(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (typeEvent === arr[i].typeEvent)
        return (
          <motion.img
            src={arr[i].image}
            alt={arr[i].image}
            initial={{ opacity: 0, x: 20, y: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: {
                type: "tween",
                duration: 1.6,
                delay: 0.5,
              },
            }}
            exit={{ opacity: 0, x: -20, y: 20 }}
          />
        );
    }
  }

  // function replaceString(oldS, newS, fullS) {
  //   for (let i = 0; i < fullS.length; ++i) {
  //     if (fullS.substring(i, i + oldS.length) === oldS) {
  //       fullS =
  //         fullS.substring(0, i) +
  //         newS +
  //         fullS.substring(i + oldS.length, fullS.length);
  //     }
  //   }
  //   return fullS;
  // }

  // console.log(replaceString("World", "Web", "Brave New World"));

  const showIcon = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (typeEvent === arr[i].typeEvent) return arr[i].icon;
    }
  };

  const showDate = (date) => {
    let year = date && date.substring(0, 4);
    let mounth = date && date.substring(5, 7);
    let day = date && date.substring(-1, 2);
    // let d = date && date.replaceAll("-", " ");

    return `${day} ${mounth} ${year}`;
  };

  return (
    <Layout>
      <section id="event">
        <div className="event container">
          <GoBackButton mediaQuery />
          <AnimatePresence>
            <motion.div
              className="event__form"
              initial={{ opacity: 0, height: 40 }}
              animate={{
                opacity: 1,
                height: "100%",
                transition: { duration: 1.6 },
              }}
              exit={{ opacity: 0, height: -40 }}
            >
              <div className="event__title">
                <GoBackButton />
                <h3 style={{ color: !theme ? "#24242a" : "#fff" }}>{name}</h3>
              </div>
              <motion.div
                className="event__form-inner"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 3.6 },
                }}
                exit={{ opacity: 0 }}
              >
                <div className="event__form-header">
                  <div className="event__calendar">
                    <CalendarIcon colorArrow="green" />
                    <div className="event__calendar-dates">
                      <span>Zaczynamy</span>
                      <span>{showDate(startDate)}</span>
                    </div>
                  </div>
                  <div className="event__calendar">
                    <CalendarIcon colorArrow="red" rotate />
                    <div className="event__calendar-dates">
                      <span>Ko??czymy</span>
                      <span>{showDate(endDate)}</span>
                    </div>
                  </div>
                </div>
                {/* <h3>{description}</h3> */}
                <div className="event__form-client">
                  <ClientCreateForm
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    values={values}
                    setValues={setValues}
                  />
                  <div className="event__price">
                    <motion.h3
                      initial={{ opacity: 0, x: 10 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          ease: "easeInOut",
                          duration: 4.6,
                          delay: 0.6,
                        },
                      }}
                      exit={{ opacity: 0, x: 10 }}
                    >
                      Cena: {price} z??
                    </motion.h3>
                    <motion.div
                      className="event__icon"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          ease: "easeInOut",
                          duration: 2.6,
                          delay: 0.7,
                        },
                      }}
                      exit={{ opacity: 0, x: 10 }}
                    >
                      {showIcon(typesEvents)}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          <div className="event__banner">{showEventImage(typesEvents)}</div>
        </div>
      </section>
      <section id="event-info" className="event-info container">
        <h1>Info section!</h1>
        <button onClick={() => setToggle(true)}>Toggle</button>
      </section>
      <Modal isToggled={isToggled} setToggle={setToggle}>
        <div className="event-info__modal">
          <h1>yo madafakas</h1>
        </div>
      </Modal>
    </Layout>
  );
};
export default Event;

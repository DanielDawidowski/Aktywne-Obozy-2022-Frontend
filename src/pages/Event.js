import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { createClient } from "../functions/client";
import { createClientEmail, createAuthorEmail } from "../functions/email";

import { getEvent } from "../functions/event";
import ClientCreateForm from "../components/forms/ClientCreateForm";
import Layout from "../components/layout/layout";

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

  let location = useLocation();

  let eventPath = location.pathname.slice(1);
  let eventType = eventPath.substring(eventPath.lastIndexOf("/")).slice(1);

  // destructure
  const { _id, name, description, price, typeEvent, startDate, endDate } =
    event;
  console.log(eventType);

  let { theme } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadEvent();
    console.log("EVENT ----", event);
  }, []);

  const loadEvent = () => {
    setLoading(true);
    getEvent(eventType)
      .then((res) => {
        setEvent(res.data);
        setLoading(false);
        console.log(res.data);
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
        console.log(res);
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

  return (
    <Layout>
      <section id="event" className="event container">
        <div className="event-hero">
          <h3>{name}</h3>
          {/* <h3>{description}</h3> */}
          <h3>Cena:{price}</h3>
          <h3>Wyjazd:{startDate}</h3>
          <h3>Przyjazd:{endDate}</h3>
          <ClientCreateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
          />
        </div>
      </section>
    </Layout>
  );
};
export default Event;

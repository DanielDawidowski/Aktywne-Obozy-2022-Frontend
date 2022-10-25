import React from "react";
import { motion } from "framer-motion";

const ClientCreateForm = ({ handleSubmit, handleChange, values }) => {
  // destructure
  const { name, email, phone, age } = values;
  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <motion.input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className=""
          placeholder="Imię i Nazwisko"
          initial={{ opacity: 0, width: 10 }}
          animate={{
            opacity: 1,
            width: "100%",
            transition: {
              ease: "easeInOut",
              duration: 1.6,
              delay: 0.2,
            },
          }}
          exit={{ opacity: 0, width: 10 }}
        />
      </div>

      <div className="">
        <motion.input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className=""
          placeholder="Email"
          initial={{ opacity: 0, width: 10 }}
          animate={{
            opacity: 1,
            width: "75%",
            transition: { ease: "easeInOut", duration: 1.6, delay: 0.3 },
          }}
          exit={{ opacity: 0, width: 10 }}
        />
      </div>

      <div className="">
        <motion.input
          type="phone"
          name="phone"
          value={phone}
          onChange={handleChange}
          className=""
          placeholder="Telefon"
          initial={{ opacity: 0, width: 10 }}
          animate={{
            opacity: 1,
            width: "50%",
            transition: { ease: "easeInOut", duration: 1.6, delay: 0.4 },
          }}
          exit={{ opacity: 0, width: 10 }}
        />
      </div>

      <div className="">
        <motion.input
          type="number"
          name="age"
          value={age}
          onChange={handleChange}
          className=""
          placeholder="Wiek"
          initial={{ opacity: 0, width: 10 }}
          animate={{
            opacity: 1,
            width: "25%",
            transition: { ease: "easeInOut", duration: 1.6, delay: 0.5 },
          }}
          exit={{ opacity: 0, width: 10 }}
        />
      </div>
      <motion.button
        className="event-btn"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { ease: "easeInOut", duration: 5, delay: 0.5 },
        }}
        exit={{ opacity: 0, y: 10 }}
      >
        Wyślij
      </motion.button>
    </form>
  );
};

export default ClientCreateForm;

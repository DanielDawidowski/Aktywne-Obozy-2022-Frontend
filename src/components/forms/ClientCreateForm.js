import React from "react";
import { motion } from "framer-motion";

const ClientCreateForm = ({ handleSubmit, handleChange, values }) => {
  // destructure
  const { name, email, phone, age } = values;
  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className=""
          placeholder="Imię i Nazwisko"
        />
      </div>

      <div className="">
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className=""
          placeholder="Email"
        />
      </div>

      <div className="">
        <input
          type="phone"
          name="phone"
          value={phone}
          onChange={handleChange}
          className=""
          placeholder="Telefon"
        />
      </div>

      <div className="">
        <input
          type="number"
          name="age"
          value={age}
          onChange={handleChange}
          className=""
          placeholder="Wiek"
        />
      </div>
      <button className="event-btn">Wyślij</button>
    </form>
  );
};

export default ClientCreateForm;

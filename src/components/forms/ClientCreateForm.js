import React from "react";
import { motion } from "framer-motion";

const ClientCreateForm = ({ handleSubmit, handleChange, values }) => {
  // destructure
  const { name, email, phone, age } = values;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className="form-control"
          placeholder="Imię i Nazwisko"
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className="form-control"
          placeholder="Email"
        />
      </div>

      <div className="form-group">
        <input
          type="phone"
          name="phone"
          value={phone}
          onChange={handleChange}
          className="form-control"
          placeholder="Telefon"
        />
      </div>

      <div className="form-group">
        <input
          type="number"
          name="age"
          value={age}
          onChange={handleChange}
          className="form-control"
          placeholder="Wiek"
        />
      </div>
      <button>Wyślij</button>
    </form>
  );
};

export default ClientCreateForm;

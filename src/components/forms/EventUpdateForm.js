import React from "react";

const ClientUpdateForm = ({
  handleSubmit,
  handleChange,
  values,
  setValues,
  handleEventChange,
  typeEvent,
}) => {
  // destructure
  const {
    name,
    description,
    price,
    priceNoDiscount,
    amount,
    status,
    startDate,
    endDate,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nazwa</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={name}
          onChange={handleChange}
          placeholder={"Nazwa"}
        />
      </div>

      <div className="form-group">
        <label>Opis</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
          placeholder={"Opis"}
        />
      </div>

      <div className="form-group">
        <label>Cena</label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={price}
          onChange={handleChange}
          placeholder={"Cena"}
        />
      </div>

      <div className="form-group">
        <label>Cena bez dofinansowania z KRUS </label>
        <input
          type="number"
          name="priceNoDiscount"
          className="form-control"
          value={priceNoDiscount}
          onChange={handleChange}
          placeholder={"Cena bez dofinansowania z KRUS"}
        />
      </div>

      <div className="form-group">
        <label>Data wyjazdu</label>
        <input
          type="date"
          name="startDate"
          className="form-control"
          value={startDate}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Data przyjazdu</label>
        <input
          type="date"
          name="endDate"
          className="form-control"
          value={endDate}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Status</label>
        <select
          name="status"
          className="form-control"
          onChange={handleChange}
          value={status}
        >
          <option value="Aktualne">Aktualne</option>
          <option value="Nieaktualne">Nieaktualne</option>
        </select>
      </div>

      <div className="form-group">
        <label>Kategoria</label>
        <select
          name="category"
          className="form-control"
          onChange={handleEventChange}
          value={typeEvent}
          required
        >
          <option aria-disabled>Wybierz</option>
          <option value="gory">Góry</option>
          <option value="splywy">Spływy</option>
          <option value="morze">Morze</option>
          <option value="polkolonie">Półkolonie</option>
        </select>
      </div>

      <button className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default ClientUpdateForm;

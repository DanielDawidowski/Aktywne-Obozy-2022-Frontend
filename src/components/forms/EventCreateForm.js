import React from "react";

const EventCreateForm = ({
  handleSubmit,
  handleChange,
  values,
  setValues,
  handleEventChange,
}) => {
  // destructure
  const {
    name,
    description,
    price,
    priceNoDiscount,
    // categories,
    typeEvent,
    startDate,
    endDate,
    // images,
    status,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nazwa</label>
        <input
          type="text"
          name="name"
          className="form-control"
          defaultValue={name}
          onChange={handleChange}
          placeholder={name}
        />
      </div>

      <div className="form-group">
        <label>Opis</label>
        <input
          type="text"
          name="description"
          className="form-control"
          defaultValue={description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Cena</label>
        <input
          type="number"
          name="price"
          className="form-control"
          defaultValue={price}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Cena bez dofinansowania z KRUS </label>
        <input
          type="number"
          name="priceNoDiscount"
          className="form-control"
          defaultValue={priceNoDiscount}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Data wyjazdu</label>
        <input
          type="date"
          name="startDate"
          className="form-control"
          defaultValue={startDate}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Data przyjazdu</label>
        <input
          type="date"
          name="endDate"
          className="form-control"
          defaultValue={endDate}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Status</label>
        <select
          name="status"
          className="form-control"
          onChange={handleChange}
          defaultValue={status}
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
          defaultValue={typeEvent}
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

export default EventCreateForm;

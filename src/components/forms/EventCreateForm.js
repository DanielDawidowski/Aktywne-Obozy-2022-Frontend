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
    amount,
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
          value={name}
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
          value={description}
          onChange={handleChange}
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
        />
      </div>

      <div className="form-group">
        <label>Ilość osób</label>
        <input
          type="number"
          name="amount"
          className="form-control"
          value={amount}
          onChange={handleChange}
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
          <option selected aria-disabled>
            Wybierz
          </option>
          <option value="gory">Góry</option>
          <option value="splywy">Spływy</option>
          <option value="morze">Morze</option>
        </select>
      </div>

      <button className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default EventCreateForm;

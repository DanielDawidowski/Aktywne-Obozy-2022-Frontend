import React from "react";

const MessageForm = ({ handleSubmit, handleChange, values }) => {
  // destructure
  const { name, email, message } = values;
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
          autoFocus
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
        <textarea
          type="text"
          name="message"
          value={message}
          rows={9}
          onChange={handleChange}
          className="form-control"
          placeholder="Wiadomość"
        />
      </div>
      <button>Wyślij</button>
    </form>
  );
};

export default MessageForm;

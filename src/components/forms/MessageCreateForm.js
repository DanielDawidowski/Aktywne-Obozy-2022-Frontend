import React from "react";
import { motion } from "framer-motion";

const MessageForm = ({ handleSubmit, handleChange, values }) => {
  // destructure
  const { name, email, message } = values;
  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <motion.input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className=""
          placeholder="Nadawca"
          initial={{ opacity: 0, width: 10 }}
          animate={{
            opacity: 1,
            width: "100%",
            transition: {
              ease: "easeInOut",
              duration: 0.6,
              delay: 0.2,
              opacity: {
                duration: 1,
              },
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
            width: "100%",
            transition: {
              ease: "easeInOut",
              duration: 0.6,
              delay: 0.3,
              opacity: {
                duration: 1.5,
              },
            },
          }}
          exit={{ opacity: 0, width: 10 }}
        />
      </div>

      <div className="">
        <motion.textarea
          type="text"
          name="message"
          value={message}
          rows={9}
          onChange={handleChange}
          className=""
          placeholder="Wiadomość"
          initial={{ opacity: 0, height: 10, width: 10 }}
          animate={{
            opacity: 1,
            height: "100%",
            width: "100%",
            transition: {
              ease: "easeInOut",
              duration: 0.6,
              delay: 0.4,
              opacity: {
                duration: 2,
              },
            },
          }}
          exit={{ opacity: 0, height: 10, width: -10 }}
        />
      </div>
      <motion.button
        initial={{ opacity: 0, width: 10 }}
        animate={{
          opacity: 1,
          width: "100%",
          transition: {
            ease: "easeInOut",
            duration: 0.6,
            delay: 0.2,
            opacity: {
              duration: 3,
            },
          },
        }}
        exit={{ opacity: 0, width: -10 }}
      >
        Wyślij
      </motion.button>
    </form>
  );
};

export default MessageForm;

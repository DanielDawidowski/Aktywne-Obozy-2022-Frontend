import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { createMessage } from "../functions/email";

import MessageForm from "../components/forms/MessageCreateForm";
import Layout from "../components/layout/layout";
import imageRight from "../assets/Images/contact.png";
import Footer from "../components/footer/footer";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [values, setValues] = useState(initialState);

  let guestName = values.name;
  let guestEmail = values.email;
  let guestMessage = values.message;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);

    const createEmailData = {
      name: guestName,
      email: guestEmail,
      message: guestMessage,
    };

    createMessage(createEmailData)
      .then((res) => {
        // console.log(res);
        toast.success(`Dodano ${guestName}`);
        setValues({ name: "", email: "", message: "" });
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
      <section id="contact" className="container">
        <div className="contact">
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                ease: "easeInOut",
                duration: 1.2,
                delay: 0.1,
                // opacity: {
                //   duration: 3,
                // },
              },
            }}
            exit={{ opacity: 0, x: -100 }}
          >
            <motion.div className="contact-question">
              <h3>Chcesz zadać nam pytanie?</h3>
            </motion.div>
            <MessageForm
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              values={values}
              setValues={setValues}
            />
          </motion.div>
          <div className="contact-right">
            <motion.img
              src={imageRight}
              alt={imageRight}
              initial={{ opacity: 0, x: 10 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  ease: "easeInOut",
                  duration: 1.2,
                  delay: 0.1,
                  opacity: {
                    duration: 3,
                  },
                },
              }}
              exit={{ opacity: 0, x: 10 }}
            />
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};
export default Contact;

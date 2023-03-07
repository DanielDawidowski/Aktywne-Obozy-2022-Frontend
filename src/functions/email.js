import axios from "axios";

export const createMessage = async (message) =>
  await axios.post(`${process.env.REACT_APP_API}/contact`, message);

export const createClientEmail = async (client) =>
  await axios.post(`${process.env.REACT_APP_API}/contact-client`, client);

export const createAdminEmail = async (client) =>
  await axios.post(`${process.env.REACT_APP_API}/contact-admin`, client);

export const createClientSpecEmail = async (client) =>
  await axios.post(
    `${process.env.REACT_APP_API}/contact-client-special`,
    client
  );

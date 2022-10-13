import axios from "axios";

export const createMessage = async (message, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/contact`, message);

export const createClientEmail = async (client, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/contact-client`, client);

export const createAuthorEmail = async (client, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/contact-author`, client);

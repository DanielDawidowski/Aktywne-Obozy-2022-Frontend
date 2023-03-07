import axios from "axios";

export const createClient = async (client, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/client`, client);

export const getClients = async () =>
  await axios.get(`${process.env.REACT_APP_API}/clients`);

export const removeClient = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/client/${slug}`, {
    headers: {
      authtoken,
    },
  });

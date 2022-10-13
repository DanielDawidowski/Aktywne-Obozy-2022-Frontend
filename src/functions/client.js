import axios from "axios";

export const createClient = async (client, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/client`, client);

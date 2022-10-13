import axios from "axios";

export const getEventsByCount = async (count) =>
  await axios.get(`${process.env.REACT_APP_API}/events/${count}`);

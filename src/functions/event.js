import axios from "axios";

export const getEventsByCount = async (count) =>
  await axios.get(`${process.env.REACT_APP_API}/events/${count}`);

export const getEvent = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/event/${slug}`);

export const createEvent = async (event, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/event`, event, {
    headers: {
      authtoken,
    },
  });

export const removeEvent = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/event/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const updateEvent = async (slug, event, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/event/${slug}`, event, {
    headers: {
      authtoken,
    },
  });

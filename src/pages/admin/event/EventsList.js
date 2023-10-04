import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminNav from "../../../components/nav/AdminNav";
import { getEventsByCount } from "../../../functions/event";
// import AdminEventCard from "../../../components/card";
import { removeEvent } from "../../../functions/event";

import Layout from "../../../components/layout/layout";

const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  // redux
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadAllEvents();
  }, []);

  const loadAllEvents = () => {
    setLoading(true);
    getEventsByCount(100)
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleRemove = (slug) => {
    // let answer = window.confirm("Delete?");
    if (window.confirm("Delete?")) {
      // console.log("send delete request", slug);
      removeEvent(slug, user.token)
        .then((res) => {
          toast.error(`${res.data.name} is deleted`);
          loadAllEvents();
        })
        .catch((err) => {
          if (err.response.status === 400) console.error(err.response.data);
          console.log(err);
        });
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="col ml-3">
          <div className="col-md-2">
            <AdminNav />
          </div>
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4 className="mt-4">Wyjazdy</h4>
          )}

          <div className="row">
            {events &&
              events.map((event) => (
                <div
                  key={event._id}
                  className="col-md-12 mt-3 border border-primary"
                >
                  <h1 className="mt-3 mb-3">{event.name}</h1>
                  <h1 className="mb-3">{event.typeEvent}</h1>
                  <h1 className="mb-3">{event.startDate}</h1>

                  <span onClick={() => handleRemove(event.slug)}>
                    <h6>remove</h6>
                  </span>
                  {/* <AdminEventCard event={event} handleRemove={handleRemove} /> */}
                  <Link to={`/admin/event/${event.slug}`}>Update</Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventsList;

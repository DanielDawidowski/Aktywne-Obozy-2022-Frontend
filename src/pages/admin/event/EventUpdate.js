import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import AdminNav from "../../../components/nav/AdminNav";
import { updateEvent, getEvent } from "../../../functions/event";
import EventUpdateForm from "../../../components/forms/EventUpdateForm";

import Layout from "../../../components/layout/layout";

const initialState = {
  name: "",
  description: "",
  price: "",
  amount: "",
  // categories: [],
  // category: "",
  startDate: "",
  endDate: "",
  // images: [],
  status: "",
};

const EventUpdate = () => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);

  let location = useLocation();
  let history = useHistory();

  // redux
  const { user } = useSelector((state) => ({ ...state }));

  let eventPath = location.pathname.slice(1);
  let slug = eventPath.substring(eventPath.lastIndexOf("/")).slice(1);
  console.log(slug);

  useEffect(() => {
    loadEvent();
  }, []);

  const loadEvent = () => {
    setLoading(true);
    getEvent(slug)
      .then((res) => {
        setValues({ ...values, ...res.data });
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    updateEvent(slug, values, user.token)
      .then((res) => {
        setLoading(false);
        console.log(res);
        toast.success(`Edytowano`);
        history.push("/admin/events");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.err);
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  const handleEventChange = (e) => {
    e.preventDefault();
    console.log("CLICKED CATEGORY", e.target.value);
    setValues({ ...values, typeEvent: e.target.value });
  };

  return (
    <Layout>
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col">
          {/* {loading ? (
            <LoadingOutlined className="text-danger h1" />
          ) : (
            <h4>Utwórz wyjazd</h4>
          )} */}
          {/* <hr /> */}

          {/* <div className="p-3">
                        <FileUpload
                            values={values}
                            setValues={setValues}
                            setLoading={setLoading}
                        />
                    </div> */}

          <hr />
          <EventUpdateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            handleEventChange={handleEventChange}
          />
        </div>
      </div>
    </Layout>
  );
};

export default EventUpdate;

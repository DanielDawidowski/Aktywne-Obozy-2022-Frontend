import React, { useState } from "react";
import { Router } from "react-router-dom";
import { toast } from "react-toastify";
import AdminNav from "../../../components/nav/AdminNav";
import { useSelector } from "react-redux";
import { createEvent } from "../../../functions/event";
import EventCreateForm from "../../../components/forms/EventCreateForm";

// import { getCategories } from "../../../functions/category";
// import FileUpload from "../../../components/form/FileUpload";
import Layout from "../../../components/layout/layout";

const initialState = {
  name: "",
  description: "",
  price: "",
  amount: "",
  categories: [],
  typeEvent: "",
  startDate: "",
  endDate: "",
  images: [],
  status: "Aktualne",
};

const EventCreate = ({ history }) => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);

  // redux
  const { user } = useSelector((state) => ({ ...state }));

  // useEffect(() => {
  //   loadCategories();
  // }, []);

  // const loadCategories = () =>
  //   getCategories().then((c) => setValues({ ...values, categories: c.data }));

  const handleSubmit = (e) => {
    e.preventDefault();
    createEvent(values, user.token)
      .then((res) => {
        toast.success(`Dodano ${res.data.name}`);
        history.push("/admin/events");
        // console.log(res);
        // window.alert("Doadano nowy wyjazd");
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

  const handleEventChange = (e) => {
    e.preventDefault();
    console.log("CLICKED CATEGORY", e.target.value);
    setValues({ ...values, typeEvent: e.target.value });
  };

  return (
    <Layout>
      <div className="container">
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

          <EventCreateForm
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

export default EventCreate;

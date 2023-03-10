import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { auth } from "./firebase";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
// import Test from "./pages/test";
import Events from "./pages/Events";
import Event from "./pages/Event";
import Contact from "./pages/Contact";
import RegisterComplete from "./pages/auth/RegisterComplete";
import ForgotPassword from "./pages/auth/ForgotPassword";
import History from "./pages/user/History";
import UserRoute from "./components/routes/UserRoute";
import AdminRoute from "./components/routes/AdminRoute";
import Password from "./pages/user/Password";
import Wishlist from "./pages/user/Wishlist";
import AdminDashboard from "./pages/admin/AdminDashboard";
import EventCreate from "./pages/admin/event/EventCreate";
import EventUpdate from "./pages/admin/event/EventUpdate";
import EventsList from "./pages/admin/event/EventsList";
import ClientsList from "./pages/admin/client/ClientsList";

// import Loader from "./components/loader/loader";
import { currentUser } from "./functions/auth";

import "./sass/main.scss";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/routes/ScrollToTop";

const App = () => {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();

  // to check firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        console.log("user", user);

        currentUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          })
          .catch((err) => console.log(err));
      }
    });
    // cleanup
    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    window.localStorage.setItem("loader", JSON.stringify(loader));
  }, [loader]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* {loader ? (
        <motion.div key="loader">
          <Loader setLoading={setLoader} />
        </motion.div>
      ) : ( */}
      <AnimatePresence exitBeforeEnter>
        <ScrollToTop />
        <Switch key={location.pathname} location={location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/register/complete" component={RegisterComplete} />
          <Route exact path="/forgot/password" component={ForgotPassword} />

          <Route exact path="/events/:eventType" component={Events} />
          <Route exact path="/event/:eventType/:slug" component={Event} />
          <UserRoute exact path="/user/history" component={History} />
          <UserRoute exact path="/user/password" component={Password} />
          <UserRoute exact path="/user/wishlist" component={Wishlist} />
          <AdminRoute
            exact
            path="/admin/dashboard"
            component={AdminDashboard}
          />
          <AdminRoute exact path="/admin/event" component={EventCreate} />
          <AdminRoute exact path="/admin/event/:slug" component={EventUpdate} />
          <AdminRoute exact path="/admin/events" component={EventsList} />
          <AdminRoute exact path="/admin/clients" component={ClientsList} />
          {/* <Route exact path="/test" component={Test} /> */}
        </Switch>
      </AnimatePresence>
      {/* )} */}
    </>
  );
};

export default App;

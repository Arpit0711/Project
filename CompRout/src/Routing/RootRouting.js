import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import About from "../Components/About/About";
import Login from "../Components/Authentication/Login/Login";
import Profile from "../Components/Authentication/Profile/Profile";
import Reg from "../Components/Authentication/Registration/Reg";
import Feedback from "../Components/Feedback/Feedback";
import Home from "../Components/Home/Home";
import Footer from "../Components/Layout/Footer/Footer";
import Header from "../Components/Layout/Header/Header";
import Pnf from "../Components/PageNotFound/Pnf";
// import Category from "../Components/Product/Category/Category";
import Details from "../Components/Product/Details/Details";
import SubCategory from "../Components/Product/SubCategory/SubCategory";
import TopicDetails from "../Components/Topic/Details/Details";
import Different_topic from "../Components/Topic/Different_topic/Different_topic";
import SubTopic from "../Components/Topic/sub_topic/sub_topic";
import User from "../Components/User/User";
import Spinner from "react-bootstrap/Spinner";
import ProtectedRoutes from "./ProtectedRoutes";

const About = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Components/About/About")), 2000);
  });
});
const Category = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("../Components/Product/Category/Category")),
      2000
    );
  });
});

export const RootRouting = () => {
  return (
    <Router>
      <Header />
      <Suspense
        fallback={
          <center>
            <h1 style={{ color: "red" }}>
              <Spinner animation="border" variant="warning" />
            </h1>
          </center>
        }
      >
        <Routes>
          <Route path="" element={<Home />} />
          {/* default path setup */}

          <Route element={<ProtectedRoutes />}>
            <Route path="about-page" element={<About />} />
            <Route path="feedback/:name" element={<Feedback />} />
            <Route path="products" element={<Category />} />
            <Route path="sub_product/:name" element={<SubCategory />} />
            <Route path="details/:name/:comp" element={<Details />} />
            <Route path="topic" element={<Different_topic />} />
            <Route path="sub_topic/:name" element={<SubTopic />} />
            <Route path="user" element={<User />} />
            <Route
              path="topicDetails/:name/:sub_name"
              element={<TopicDetails />}
            />
          </Route>

          <Route path="*" element={<Pnf />} />
          {/* wild card path setup */}

          <Route path="registration" element={<Reg />} />

          <Route path="login" element={<Login />} />

          <Route path="profile" element={<Profile />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

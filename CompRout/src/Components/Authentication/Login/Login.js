import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import "./Login.css";
import Axios from "axios";

const loginValidate = (formValue) => {
  let errMsg = {};
  let validEmail = /^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$/;
  let validPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*]).{8,15}$/;
  if (!formValue.email) {
    errMsg.email = "Required field";
  } else if (!validEmail.test(formValue.email)) {
    errMsg.email = "wrong pattern";
  }
  // else if (formValue.email.length < 10)
  // {
  //   errMsg= "Must be more than 10 characters"
  // }
  if (!formValue.password) {
    errMsg.password = "Required field";
  } else if (!validPass.test(formValue.password)) {
    errMsg.password = "wrong pattern";
  }
  console.log("Error ", errMsg);
  return errMsg;
};

export default function Login() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidate,
    onSubmit: (formValue) => {
      console.log("Submitted Value: ", formValue);

      Axios.post("https://prod-crud.herokuapp.com/login", formValue)
        .then((res) => {
          // alert("Data submitted successfully");
          console.log("Axios res", res);
          window.sessionStorage.setItem("TokenValue", res.data.token);
          navigate("/profile");
        })
        .catch((err) => {
          console.log("Axios err: ", err);
        });
    },
  });
  return (
    <div className="login__container">
      <form className="login" onSubmit={formik.handleSubmit}>
        <h1>Login</h1>
        <label>
          Email:<br></br>
          <input
            className="username"
            type="email"
            name="email"
            placeholder="Username"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        <br />
        {formik.touched.email && formik.errors.email ? (
          <span className="span1">{formik.errors.email}</span>
        ) : null}

        <label>
          Password<br></br>
          <input
            className="password"
            type="text"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        <br></br>
        {formik.touched.password && formik.errors.password ? (
          <span className="span1 ">{formik.errors.password}</span>
        ) : null}
        <input type="submit" value="Login" className="submit" />
        <h6>Sign Up!</h6>
        <Link to={"/"}>cant access your account</Link>
      </form>
    </div>
  );
}

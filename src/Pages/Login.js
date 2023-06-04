import React, { useState, useEffect } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../Features/userSlice/user";

function Login() {
  const [errormsg, setErrormsg] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onsubmit = (e) => {
    console.log(e);
    axios.post("http://localhost:3001/user/login", e).then((res) => {
      console.log(res.data);
      if (res.data.status) {
          dispatch(login({user:res.data.user,token:res.data.accesstoken}));
        navigate("/");
      } else {
        setErrormsg("password does not match");
      }
    });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          top: "0",
          right: "0",
          marginTop: "1px",
          marginRight: "20px",
        }}
      >
        {/* <p style={{ marginRight: "10px" }}>dont have an account?</p>
        <button
          style={{
            backgroundImage: "linear-gradient(45deg, #9dbddd, #2a42a2)",
          }}
          onClick={() => navigate("/")}
        >
          Register
        </button> */}
      </div>
      <div class="login-page">
        <div className="form">
          <div class="login">
            <div className="login-header">
              <h3>Welcome back!</h3>
              <p></p>
            </div>
          </div>
          <form className="login-form" onSubmit={handleSubmit(onsubmit)}>
            <label className="lab" for="uname">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Email adress"
              {...register("email", { required: "valid email" })}
            />
            {errors?.email && <p className="error">{errors?.email?.message}</p>}
            <label className="lab" for="password">
              Password
            </label>
            <input
              type="password"
              placeholder="password"
              {...register("password", { required: "password required" })}
            />
            {errormsg && <p className="err">{errormsg}</p>}
            {errors?.password && (
              <p className="error">{errors?.password?.message}</p>
            )}

            <button>login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

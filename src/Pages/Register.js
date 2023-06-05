
import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";


  
 
  


function Register() {



    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
  
    const onsubmit = (e) => {
      console.log(e);
      axios.post('http://localhost:3001/user/register', e)
        .then((res) => {
          console.log(res.data);
          if (res.data.status) {
            navigate('/login');
          } else {
            setErrorMessage('Email is already exists...');
          }
        })
       
    };
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm();
  return (
    <div>

<div style={{display: 'flex', alignItems: 'center', position: 'absolute', top: '0', right: '0', marginTop: '1px', marginRight: '20px'}}>
        {/* <p style={{marginRight: '10px'}}>already have an account</p>
        <button style={{backgroundImage: 'linear-gradient(45deg, #9dbddd, #2a42a2)'}} onClick={()=>navigate('/login')}>Sign in</button> */}
      </div>
      <div class="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h3>let's go</h3>
              <p></p>
            </div>
          </div>
          <form className="login-form" onSubmit={handleSubmit(onsubmit)}>
            <label className="lab" for="username">
              Full Name
            </label>
            <input
              type="text"
              {...register("username", { required: "fill the name" })}
               />{errors?.username && (<p className="error">{errors?.username?.message}</p>)}
            
            <label className="lab" for="password">
              Email
            </label>
            <input
            type="email"
            //   type="email"
              {...register("email", { required: "fill the email",
               pattern:{
                value:/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                message:'invalid email id'
               } })}
               className={errorMessage ? "input-error" : ""}
            />{errors?.email && (<p className="error">{errors?.email?.message}</p>)}  
            {errorMessage && <p className="err">{errorMessage}</p>}
            <label className="lab" for="password">
              Choose Password
            </label>
            <input
              type="password"
              {...register("password", { required: "fill the password",
              minLength: {
                value: 6,
                message: 'must have 6 numbers' 
              } })}
            />{errors?.password && (<p className="error">{errors?.password?.message}</p>)}
           
            <button>signup</button>
            <div><p onClick={() => {
                navigate("/login");
              }}
              style={{ marginTop: "18px", fontSize: "16px", cursor: "pointer" }}
           >already have account</p></div>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
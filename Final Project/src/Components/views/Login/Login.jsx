import React from "react";
import './loger.css';
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = (props) => {
    var [register, setRegister] = useState({
        username: "",
        password: "",
        name: "",
        lname: "",
      });
      var [error, setError] = useState("");
    
      function handleUpdate(e) {
        const { value, name } = e.target;
    
        setRegister((prevValue) => {
        if(name === "username") {
            return { ...prevValue, username: value};
        } else{
            return{ ...prevValue, password: value};
        }
        });
      }
    
      function processLogin(e) {
        e.preventDefault();
        var usrName = register.username;
        var usrPass = register.password;
        axios.post("/Login", {user: usrName, pass: usrPass}).then((res) => {
          var data = res.data;
          if(!data.hasOwnProperty("error")){
            register.name = data.name;
            register.lname = data.lname;
            props.handler(register);
          } else {
            setError(data.message);
          }
        }).catch((err => {
          console.error(err.error);
        }));
      }


    return(
    <div className="main">
        <div className = "Login">
        <div className = "form">
            <Link to={"/"}>
                <img src={logo} alt="Pasenme el logo que está roto" style={{width:"300px", color: 'aliceblue'}} class="top_img"/>
            </Link>
            <form action="" class="log-form">
                <input type="email" placeholder="Email" class="log-inp"/>
                <br/>
                <br/>
                <br/>
                <input type="password" placeholder="Password" />
                <Link to={"/Welcome"}>
                <input type="submit" value= "Sign in!" className="submit"/>
                </Link>
                <input type="submit" value= "New? Sign up!" className="submit"/>
            </form>
        </div>
        </div>
    </div>
    );
}

export default Login;
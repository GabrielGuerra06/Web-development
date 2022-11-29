import React from "react";
import './welcome.css';
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
  
  const Welcome = ()=> {
  
    return(
      <>
      
      <h1>Welcome to Blatzi!! :D hope you enjoy no sleeping and hardcoding</h1>
      <div className="main">
        <div className = "Login">
        <div className = "form">
            <Link to={"/"}>
                <img src={logo} alt="Pasenme el logo que está roto" style={{width:"300px", color: 'aliceblue'}} class="top_img"/>
            </Link>
            <Link to={"/"}>
                <h1> Start enyojing your subscriptions </h1>
            </Link>
        </div>
        </div>
      </div>
      </>
    );
  }
  
  export default Welcome;
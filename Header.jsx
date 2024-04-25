import React from "react";
import {LOGO_URL} from "../utils/constant"
import { useState } from "react";


function Header(){

    const [btnName , setBtnName] = useState("Login")
   
    
    // console.log("Header rendered")


    //We create local variable
    // let btnName = "Login"
    function btnChangeHandler(){
      // btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")

      if(btnName === "Login"){
        setBtnName("Logout")
      }
      else{
        setBtnName("Login")
      }
    }
    
    return (
    <div id="header">
    <div id="logo-container">
      <img className="logo" src={LOGO_URL} ></img>
    </div>
  <div className="nav-items">
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact</li>
      <li>Cart</li>
    </ul>
  </div>
    <button className="login-btn" onClick={btnChangeHandler}>{btnName}</button>
  </div>
  )
}

export default Header
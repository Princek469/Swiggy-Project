import React from "react";
import {CDN_URL} from "../utils/constant";


function RestaurantCard(props){ 

    //this is Destructuring  
    const {resData} = props;
  
  
    //Destructuring we can pass data like this also 
    const {name , cuisines , avgRating , costForTwo , cloudinaryImageId , areaName } = resData?.info
    const {deliveryTime} = resData?.info?.sla
  
  
    // console.log(props)   => It is Just an Javascript Object 
    return (
      <div className="res-card">
        <img 
        className="res-logo"
        alt="res-logo"
        src={
            CDN_URL  + cloudinaryImageId
        } />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
        <h4>⭐{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} Minutes</h4>
      </div>
    )
  }

export default RestaurantCard
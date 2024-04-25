import React from "react";

function YourMind(props){

    const {yourMind} = props

    // const {image} = yourMind?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info?.imageId
    const {text} = yourMind?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info?.action?.text
    return (
        <div className="WhatOnYourMind">
            <img src={image} alt="" />
            <h3>{text}</h3>
        </div>
    )
}

export default YourMind;
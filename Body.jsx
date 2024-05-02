import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import resList from "../utils/mockData";



function Body(){

    const [listOfRestaurant , setListOfRestaurant] = useState([])
    const [yourMind , setYourMind] = useState([])
    //only for filtered restaurant  => We will keep another copy of listofRestaurant and filter it when user type on searchbar
    const [listOfRestaurantCopy , setListOfRestaurantCopy] = useState([])
    const [searchText , setSearchText] = useState("")


    //If no dependecy array =>  useEffect is called on every render
    useEffect(()=>{
      
      fetchData();
    },[])


    // Wheneever state changes react will triggered the reconciliation process (re-rendered the component)
    console.log("Body Rendered")

    async function fetchData(){
        const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6330086&lng=77.2076411&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
        const json = await response.json();

        console.log(json)
        //we will update or extract  listOfRestaurant with new data coming from API3  
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        //we will also update the copy of listofRestaurant 
        setListOfRestaurantCopy(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
    }

    //Shimmer UI Fake Cards while loading  this is also Conditional Rendering
    // if(listOfRestaurant.length === 0){
    //   return <Shimmer></Shimmer>
    // }

    //button Top Rated Restaurant
    function clickHandler(){

      
      const filteresList = listOfRestaurant.filter(
        (res) => res?.info?.avgRating>4
      )
      // console.log(listOfRestaurant);
      setListOfRestaurant(filteresList)
      setListOfRestaurantCopy(filteresList)
      }

      //for search btn
      function searchHandler(){
        
        
        
        
        
        //filter the restaurant card and update the ui
        const filteredRestaurant = listOfRestaurant.filter((rest) =>{
          return rest?.info?.name.toLowerCase().includes(searchText)
        })
        
        //we will also update the copy of listRestaurantCopy so we can use it
        setListOfRestaurantCopy(filteredRestaurant)
        

      }


      function inputTextHandler(e){
        setSearchText(e.target.value)
      }
      
    return listOfRestaurant.length === 0 ? <Shimmer></Shimmer> :  (
      <div className="body">
        <div className="flex">
        <div className="search">
          {/* we will Need to update the value of searchText */}
        <input type="search" className="input-box"  value={searchText} onChange={inputTextHandler} />
        <button className="search-btn" onClick={searchHandler} >Search</button></div>
        <button className="TopRatedBtn" onClick={clickHandler}>Top Rated Restaurant</button>
        </div>
        <div>
            {/* <YourMind yourMind = {yourMind}></YourMind> */}
        </div>
        <h2 className="restaurant-delhi">Top restaurant chains in Delhi</h2>
        <div className="restaurant-container">
          {/* we make a new component for restaurant-card */}
          {/* we will create map for iterating over each element and it return RestaurantCard with props set to restaurant */}
          {
            listOfRestaurantCopy.map((restaurant) => (
             <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}><RestaurantCard  resData={restaurant}></RestaurantCard></Link>
            ))
          }
        </div>
      </div>
    )
        }
export default Body;

import React from "react";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const [resMenu, setResMenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  
async function fetchMenu(){
  const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5476094&lng=77.4788014&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`)
  const json = await response.json()
  console.log(json)

  setResMenu(json?.data)
}

    
  if (resMenu === null) return <Shimmer></Shimmer>;
  const {name , cuisines , costForTwoMessage , avgRatingString} = resMenu?.cards[2]?.card?.card?.info;

  const { itemCards } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards)


  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines} - {costForTwoMessage}
      </p>
      <h3>{avgRatingString}⭐</h3>

      <ul className="restaurantMenuNames">
        {
          itemCards && itemCards.map((item) => {
            return (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name} - Rs.{item?.card?.info?.price/100}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default RestaurantMenu;

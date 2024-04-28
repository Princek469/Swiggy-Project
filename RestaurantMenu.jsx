import React from "react";
import {useEffect , useState}  from "react";
import Shimmer from "./Shimmer";

function RestaurantMenu(){

    const [resMenu , setResMenu] = useState(null)

    useEffect(() => {
        fetchMenu();
    } , [])


    async function fetchMenu() {
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5476094&lng=77.4788014&restaurantId=683307&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`)
        const json = await response.json()

        console.log(json)
        setResMenu(json?.data)

    }
    

    return (resMenu === null) ? <Shimmer></Shimmer> : (
        <div className="menu">
            {/* we will use destructuring property there */}
            <h1>{resMenu?.cards[2]?.card?.card?.info?.name}</h1>
            <p>{resMenu?.cards[2]?.card?.card?.info?.cuisines.join(", ")}
             - {resMenu?.cards[2]?.card?.card?.info?.costForTwoMessage}</p>
            
            <h3>{resMenu?.cards[2]?.card?.card?.info?.avgRatingString
}⭐</h3>

            <ul>
                <li>Biryani</li>
                <li>Diet Coke</li>
                <li>Burgers</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;
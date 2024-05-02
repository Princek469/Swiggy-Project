import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


function App(){
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}


const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <App></App>,
        children : [
            {
                path : "/",
                element : <Body></Body>,
            },
            {
                path : "/about",
                element : <About></About>,
            },
            {
                path : "/contactus",
                element : <ContactUs></ContactUs>,
            },
            {
                // :resId =>  This is dynamic it can be changed according to restaurantId changed
                path : "/restaurants/:resId",
                element : <RestaurantMenu></RestaurantMenu>
            }
        ],
        errorElement : <Error></Error>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}></RouterProvider>);

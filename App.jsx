import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";


function App(){
    return (
        <div>
            <Header></Header>
            <Body></Body>
        </div>
    )
}


const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <App></App>,
        errorElement : <Error></Error>
    },
    {
        path : "/about",
        element : <About></About>,
    },
    {
        path : "/contactus",
        element : <ContactUs></ContactUs>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}></RouterProvider>);
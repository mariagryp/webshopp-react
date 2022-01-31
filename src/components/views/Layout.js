import { Outlet } from "react-router-dom";
import Navbar from "../general/Navbar";
import Basket from "../general/Basket";
import { useContext  } from "react";
import { BasketContext  } from "../../context/BasketContext";

const Layout = () => {
 
    const {basketShown} = useContext(BasketContext);

    //conditional rendering: basket is visible if there r items in it
    return (
        <>
       {basketShown && <Basket />}
        <Navbar />
        <Outlet />
        </>
    );
};

export default Layout;
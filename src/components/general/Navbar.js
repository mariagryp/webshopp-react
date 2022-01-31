import { Link , useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { BasketContext } from "../../context/BasketContext";

const Navbar = () => {

    const {loggedIn, setLoggedIn, setUser} = useContext(UserContext);
    const {basket, basketShown, setBasketShown} = useContext(BasketContext); //add
    const navigate = useNavigate();

    //style
    const navStyle = {
        padding: "20px 10px",
        borderBottom: "2px solid black",
        display: "flex",
        justifyContent: "space-between"
    };

    const linkStyle = {
        marginRight: "10px",
    };

    const buttonStyle= {
        marginLeft: "10px",
    }


    const handleBasketShowing = () => {
        return basketShown ? <button style={buttonStyle} onClick={() => 
            setBasketShown(false)}>Hide Basket</button> 
            : (
            <button style={buttonStyle} 
            onClick={() => setBasketShown(true)}>Show Basket</button>
            );
          };

        const handleLogOut = () => {
            setLoggedIn(false);
            setUser({userName: ""});
            navigate("/login");
        }

    //functions that returns navbar with links
    const authNav = () => {
        return (
            <nav style ={navStyle}>
                <div>   
            <Link style={linkStyle} to="/">Home</Link >
            <Link style={linkStyle} to="/account">Account</Link >
            <Link style={linkStyle} to="/Checkout">Checkout</Link >
                </div>
                <div >
                    <span>Items: {basket.length}</span>
                    { handleBasketShowing()}
                    <button style={buttonStyle} onClick={handleLogOut}>Log out</button>
                </div>
             
            </nav>
        );
    };

    const unAuthNav = () => {
        return (

            <nav style={navStyle}>
                <div>
                <Link style={linkStyle} to="/">Home</Link >
                <Link style={linkStyle} to="/checkout">Checkout</Link >
                <Link style={linkStyle} to="/login">Login</Link >
                <Link style={linkStyle} to="/register">Register</Link >
                </div>
                <div>
                    <span>Items: {basket.length}</span>
                    {handleBasketShowing()}
                </div> 

                
            </nav>
        )
    }
     

    return (
        //logged in or not, true or false, returns 
        <>
        {loggedIn ? authNav() : unAuthNav()}
        </>
    )
}

export default Navbar;
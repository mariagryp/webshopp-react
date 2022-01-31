import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";

const Basket = () => {
    const { basket } = useContext(BasketContext);

    // return weather empty basket or showing some products in the basket
    return (
        <div style = {{ padding:"20px 10px",
        borderBottom: "3px solid green" }}>
            { basket.length <= 0 && 
            <p>There are no products in your basket</p>} 
        </div>
    );
};

export default Basket;
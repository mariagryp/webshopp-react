import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";

const ProductItem = (props) => {
const { product } = props;
const { basket, setBasket } = useContext(BasketContext);

const addToBasket = () => {
    //setBasket([...basket, product])
    const sameItem = basket.filter((item) => item === product);
    Object.assign(product, {
        qty: sameItem.length + 1,
    });
    setBasket([...basket, product]);

};

    return (
        <div style={{
        width: '30%',
        border:"2px solid green",
        margin:"20px",
        padding: "20px",
        textAlign: 'center'}} 
        >

        <p>{product.name}</p>
        <p>{product.price} kr</p>

        <button onClick={addToBasket}>Add to basket</button>
        </div>
    );

};

export default ProductItem;
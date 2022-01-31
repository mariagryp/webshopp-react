import { createContext, useState } from "react";

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
const [basket, setBasket] = useState([]);
const [basketShown, setBasketShown] = useState(false);

console.log(basket);
    return (
        <>
        <BasketContext.Provider value={{ basket, setBasket, basketShown, setBasketShown}}
        >
          {children}
        </BasketContext.Provider>
        </>
    );
};

export default BasketProvider;

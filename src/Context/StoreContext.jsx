import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    
    

    const [carItems, setCartitems] = useState({})


    const addtocart = (itemId) => {
        if (!carItems[itemId]) {
            setCartitems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const remoeFromCart = (itemId) => {
        setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in carItems) {
            if (carItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * carItems[item];


            }
        }
        return totalAmount;

    }

    const contextValue = {
        
        food_list,
        carItems,
        setCartitems,
        addtocart,
        remoeFromCart,
        getTotalCartAmount


    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>

    )

}
export default StoreContextProvider
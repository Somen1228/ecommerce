import { createContext, useEffect, useState } from "react";
import {products} from '../assets/assets'
import { toast } from "react-toastify";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (size, itemId) => {
        
        if(!size) {
            toast.error("Please Select The Size")
            return;
        }
        
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]) {
            if(cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }

    const getCartItemsCount = () => {
        let totalCount = 0;

        for(const items in cartItems) {
            for(const item in cartItems[items]) {
                if(cartItems[items][item] > 0) {
                    totalCount += cartItems[items][item];
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = Number(quantity);
        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;

        for(const items in cartItems) {
            let productInfo = products.find(item => item._id === items)
            
            for(const item in cartItems[items]) {
                if(cartItems[items][item] > 0) {
                    totalAmount += cartItems[items][item] * productInfo.price;
                }    
            }
        }
        return totalAmount;
    } 

    useEffect(() => {
        console.log(cartItems);
        
    }, [cartItems])

    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, cartItems, addToCart, getCartItemsCount, updateQuantity, getCartAmount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
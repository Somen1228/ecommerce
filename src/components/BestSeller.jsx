import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestSellingProducts = products.filter((item) => item.bestseller);
        setBestSeller(bestSellingProducts.slice(0, 5));
    }, [products]);

    return (
        <div className="my-10">
            <div className="text-center text-3xl py-8">
                <Title text1={"BEST"} text2={"SELLERS"} />
                <p className="w-3/4 m-auto text-xs sm:text md:text-base text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit earum ut deserunt perferendis modi repellendus.
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gay-y-6">
                {
                    bestSeller.map((item, index) => (
                        <ProductItem key={index} name={item.name} id={item._id} image={item.image} price={item.price}/>
                    ))
                }
            </div>
        </div>
    );
};

export default BestSeller;

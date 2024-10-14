import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {

    const { currency } = useContext(ShopContext);
    
    const handleScrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth', // Use 'auto' for an instant scroll
        });
    };

    useEffect(() => {
        handleScrollToTop();
    })
      

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}
                                         
export default ProductItem

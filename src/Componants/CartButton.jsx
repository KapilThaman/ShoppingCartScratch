import React, { useContext, useEffect, useState } from 'react'
import "../App.css"
import { fullAppContext } from '../Context/Context';
import { Link } from "react-router-dom";
function CartButton() {
    const {itemsInCart} = useContext(fullAppContext);
    const [temporaryList, settemporaryList] = useState(0)


    useEffect(() => {
        
        const totalNumberOfItems = itemsInCart.reduce((total, product) => total + product.quantity, 0);

        settemporaryList(totalNumberOfItems);
        console.log(itemsInCart,"itemsincart"); 
    }, [itemsInCart])
    
    
  return (<>
    
    
            <Link to="/cart"><button className='cartButton'> Cart {temporaryList} </button></Link>
         
    </>
  )
}

export default CartButton

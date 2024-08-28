import React, { useContext, useEffect, useState } from "react";
import { fullAppContext } from "../Context/Context";


function CartPage() {
  const { itemsInCart,setgridViewEnabled,setlistViewEnabled, } = useContext(fullAppContext);
  console.log(itemsInCart, "In Cart Page");
  const [totalPrice, settotalPrice] = useState(0)

  useEffect(() => {
    const total = itemsInCart.reduce((sum, product) => {
      return sum + product.quantity * product.price;
    }, 0);
  
    settotalPrice(total);
  }, [itemsInCart]);
  
  useEffect(() => {
    setgridViewEnabled(false);
    setlistViewEnabled(false);
  }, [])
  


  return (
    <><div className="gridFormat">
      {itemsInCart.map((product,index) => {
        return (
          <div key={index} className="gridFormat2">
            <span>name: {product.name}</span>
            <span>price: {product.price * product.quantity}</span>
            <span><img src={product.url} alt={product.url} /></span>
          </div>
        );
      })}
      </div>
      <div> Total Price: {totalPrice}</div>
    </>
  );
}

export default CartPage;

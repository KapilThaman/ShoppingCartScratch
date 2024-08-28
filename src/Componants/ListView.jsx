import React, { useContext, useEffect } from "react";
import "../App.css";
import { fullAppContext } from "../Context/Context";
function ListView() {
  const { filteredList, setitemsInCart,itemsInCart } = useContext(fullAppContext);


  const handleAdd = (product) => {
    if (itemsInCart.length === 0) {
        setitemsInCart([{ ...product, quantity: 1 }]);
      } else {
        setitemsInCart((prevItems) =>
          prevItems.some(item => item.name === product.name)
            ? prevItems.map(item =>
                item.name === product.name
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            : [...prevItems, { ...product, quantity: 1 }]
        );
      }
  };




  const handlesubtract = (product) => {
    
    const item = itemsInCart.find(oneproduct => oneproduct.name === product.name);
    if(item && item.quantity == 0){
        alert("No "+ item.name + " is in the cart");
    }
    else {
        
        setitemsInCart((prevItems) =>
          prevItems.some(item => item.name === product.name)
            ? prevItems.map(item =>
                item.name === product.name
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              )
            : [...prevItems]
        );
      }
  };
  return filteredList.map((product, index) => {
    return (
      <>
     
        <div className="dataContainerList">
          <div  className="gridFormat">
            <div  className="gridFormat2">
              <span key={index} className="name">name: {product.name}</span>
              <span className="description">
                description:{product.description}
              </span>
              <span className="category">category: {product.category}</span>
              <span className="price">price:{product.price}</span>
            </div>
            <div className="addButtonDiv">
              <div className="image_div">
                <span className="imageURl">
                  <img
                    className="product_Image"
                    src={product.url}
                    alt={product.url}
                  />
                </span>
              </div>
              <button
                onClick={() => {
                  handleAdd(product);
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  handlesubtract(product);
                }}
              >
                -
              </button>
            </div>
            </div>
        </div>
      </>
    );
  });
}
export default ListView;

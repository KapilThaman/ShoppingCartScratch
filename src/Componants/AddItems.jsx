import React, { useContext, useState } from 'react'
import { fullAppContext } from '../Context/Context';
function AddItems() {
    const {setAddisopened,setproductlist,productlist, setFilteredList,setgridViewEnabled} = useContext(fullAppContext);
    const [name, setname] = useState("");
    const [description, setdescription] = useState("");
    const [category, setcategory] = useState("");
    const [price, setprice] = useState("");
    const [url, seturl] = useState("");

const handleClick = ()=>{
setAddisopened(false);
setgridViewEnabled(true);
  setproductlist((prev) => {
    const data = [...prev,{name:name,description:description,category:category,price:price,url:url,quantity:0}];
    setFilteredList(data);
    return data;
  });
}
  return (
    <div className='addItemsdiv'>
        <input className='nameInput' type="text" placeholder='Name' value = {name} onChange={(e)=>{setname(e.target.value);}} />
        <input className='descriptionInput' type="text" name="" id="" placeholder='description' value={description} onChange={(e)=>{setdescription(e.target.value);}}/>
        <input className='categoryInput' type="text" name="" id="" placeholder='category' value={category} onChange={(e)=>{setcategory(e.target.value);}} />
        <input className='priceInput' type="number" placeholder='Price' value={price} onChange={(e)=>{setprice(e.target.value);}}/>
        <input className='imageURLInput' type="text" name='url' value={url} onChange={(e)=>{seturl(e.target.value);}} />
        <button className='submitButton' type='submit' onClick={handleClick} >Add Items</button>
    </div>
  )
}


 
  
export default AddItems
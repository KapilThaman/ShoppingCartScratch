import React, { useContext, useEffect, useState } from 'react'
import "../App.css"
import { fullAppContext } from '../Context/Context';
function SearchItems() {
    const [searchValue, setsearchValue] = useState("");
    const {productlist,setFilteredList} = useContext(fullAppContext);

    console.log(productlist, 'product');

    useEffect(() => {
        const searchedProductList =  productlist.filter((obj)=>{
            if (obj.name.includes(searchValue)) {
                return true;
            }
        });

        setFilteredList(searchedProductList);
    }, [searchValue]);

    const handleChange = (e)=>{
        setsearchValue(e.target.value);
   }   
    return (
    <input className='inputSearch' onChange={(e)=>{handleChange(e)}} placeholder='Search Items' value={searchValue} />

  )
}

export default SearchItems
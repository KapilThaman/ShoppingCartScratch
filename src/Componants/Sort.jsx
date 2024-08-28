import React, { useContext } from 'react'
import { fullAppContext } from '../Context/Context'

function SortButton() {

    const {productlist,setsorted,sorted} = useContext(fullAppContext);

    const handleClick = ()=>{
        productlist.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0;
          });
        console.log(productlist);
          setsorted(!sorted);
        
    }
  return (
    <button onClick={handleClick}>SORT</button>
  )
}

export default SortButton
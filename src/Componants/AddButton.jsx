import React, { useContext } from 'react'
import "../App.css"
import { fullAppContext } from '../Context/Context';

function AddButton() {
   const {setAddisopened} = useContext(fullAppContext);

    const handleClick = ()=>{
        setAddisopened(true);
    }
  return (
    <button className='addButton' onClick={handleClick}>Add +</button>
  )
}

export default AddButton
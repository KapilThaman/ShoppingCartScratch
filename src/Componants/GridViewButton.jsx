import React, { useContext } from 'react'
import { fullAppContext } from '../Context/Context';

function GridViewButton() {
    const { setgridViewEnabled,setlistViewEnabled } = useContext(fullAppContext);

    const handleClick = ()=>{
      setgridViewEnabled(true);
      setlistViewEnabled(false);
    }
  return (
    <>
    <button onClick={handleClick} className='ListButton'>
        Grid View
    </button>
    </>
  )
}

export default GridViewButton
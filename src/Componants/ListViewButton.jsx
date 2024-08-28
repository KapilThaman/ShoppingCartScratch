import React, { useContext } from 'react'
import { fullAppContext } from '../Context/Context';

function ListViewButton() {
    const { setlistViewEnabled,setgridViewEnabled } = useContext(fullAppContext);

    const handleClick = ()=>{
        setlistViewEnabled(true);
        setgridViewEnabled(false);
    }
  return (
    <>
    <button onClick={handleClick} className='ListButton'>
        List View
    </button>
    </>
  )
}

export default ListViewButton
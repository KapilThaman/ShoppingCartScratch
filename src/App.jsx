import "./App.css";
import SortButton from "./Componants/Sort.jsx";
import SearchItems from "./Componants/SearchItems.jsx";
import CartButton from "./Componants/CartButton.jsx";
import GridArea from "./Componants/GridArea.jsx";
import AddButton from "./Componants/AddButton.jsx";
import { useState } from "react";
import { fullAppContext } from "./Context/Context.jsx";
import AddItems from "./Componants/AddItems.jsx";
import Logo from "./assets/Logo.png";
import ListView from "./Componants/ListView.jsx";
import ListViewButton from "./Componants/ListViewButton.jsx";
import GridViewButton from "./Componants/GridViewButton.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./Componants/CartPage.jsx";

function App() {
  const [Addisopened, setAddisopened] = useState(false);
  const [productlist, setproductlist] = useState([]);
  const [sorted, setsorted] = useState(false);
  const [filteredList, setFilteredList] = useState([]);
  const [itemsInCart, setitemsInCart] = useState([]);
  const [listViewEnabled, setlistViewEnabled] = useState(false);
  const [gridViewEnabled, setgridViewEnabled] = useState(true);
  return (
    <BrowserRouter>
      <fullAppContext.Provider
        value={{
          Addisopened,
          setAddisopened,
          productlist,
          setproductlist,
          setsorted,
          sorted,
          filteredList,
          setFilteredList,
          setitemsInCart,
          itemsInCart,
          setlistViewEnabled,
          listViewEnabled,
          setgridViewEnabled,
          gridViewEnabled,
        }}
      >
        <div className="mainDiv">
          <div className="coverouter">
            <div>
              <img className="logoImg" src={Logo} alt="" />
            </div>
            <div className="outerdiv">
              <ListViewButton />
              <GridViewButton />
              <SortButton />
              <SearchItems />
              <CartButton />
            </div>
          </div>
          {Addisopened ? (
            <AddItems />
          ) : listViewEnabled ? (
            <div className="dataContainerList">
              <ListView />
            </div>
          ) : gridViewEnabled ? (
            <div className="dataContainer">
              <GridArea />  
            </div>
          ) : (
            <CartPage />
          )}
          {!Addisopened ? <AddButton /> : <div></div>}
        </div>
        <Routes>
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </fullAppContext.Provider>
    </BrowserRouter>
  );
}

export default App;

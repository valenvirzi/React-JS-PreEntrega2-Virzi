import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartDisplay from "./components/CartDisplay";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <div className="spacingBar"></div>
    <Routes>
      {/* <Route exact path="/" element={}/>
      <Route exact path="" element={}/> */}
      <Route exact path="/products" element={<ItemListContainer greeting="Bienvenido a la mejor tienda de celulares" />}/>
      <Route exact path="/products/phones" element={<ItemListContainer greeting="Bienvenido a la mejor tienda de celulares" />}/>
      <Route exact path="/products/tablets" element={<ItemListContainer greeting="Bienvenido a la mejor tienda de celulares" />}/>
      <Route exact path="/products/notebooks" element={<ItemListContainer greeting="Bienvenido a la mejor tienda de celulares" />}/>
      <Route exact path="/cart" element={<CartDisplay/>}/>
    </Routes>
    <ItemListContainer/>
    </div>
    </BrowserRouter>
  );
}

export default App;

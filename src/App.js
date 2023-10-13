import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartDisplay from "./components/CartDisplay";
import { CartProvider } from "./context/CartContext";

export const ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

function App() {

  return (
    <CartProvider>
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <div className="spacingBar"></div>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path="/category/:id" element={<ItemListContainer/>}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
        <Route exact path="/cart" element={<CartDisplay/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;

import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartDisplay from "./components/CartDisplay";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <div className="spacingBar"></div>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path="/category/:id" element={<ItemListContainer/>}/>
        {/* <Route path={"/item/:id"} element={<ItemDetailContainer/>} /> */}
        <Route exact path="/cart" element={<CartDisplay/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

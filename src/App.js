import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="spacingBar"></div>
      <ItemListContainer greeting="Bienvenido a la mejor tienda de celulares" />
    </div>
  );
}

export default App;

import React from "react";
import Footer from "./Components/Footer";
import Carrucel from "./Components/Carrucel";
import Cards from "./Components/Cards";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/itemListContainer";

const App = () => {
  return (
    <div> 
    <NavBar/>
    <ItemListContainer greeting={"Bienvenidos a Pinturerias Bro!!"}/>
    <Carrucel/>
    <Cards/>
    <Footer/>
    </div>
  )
}

export default App;


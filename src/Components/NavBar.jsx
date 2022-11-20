import React from "react";
import CartWidget from "./CartWidget";
import "../App.css";
const NavBar = () =>{                
    return (
        
            <div className="row header container-fluid">
                <div className="col-md-9">
                    <div className="contenedorLogo row ">
                        <div className="col-md-1 "> <img src="./../imagenes/posible1logo.jpg" className="logo" width="88" alt='Logo'/></div>
                        <div className="col-md-10  "><h1 className="header__logo"> Pintureria BROS </h1></div>
                    </div>
                    <div className="navBar row container-fluid"> 

                        <ul className="ItemNavBar"> 
                            <li className="puntosNavBar"><a href="../index.html">Home</a></li>
                            <li className="puntosNavBar"><a href="./productos.html">Productos</a></li>
                            <li className="puntosNavBar"><a href="./contact.html">Te contactamos</a></li>
                            <li className="puntosNavBar"><a href="./diseños.html">Inspirate</a></li>
                            <li className="puntosNavBar"><a href="./about.html">Sobre Nosotros</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-end">
                    <CartWidget/>
                </div>
            </div>
    ) 
}
export default NavBar;
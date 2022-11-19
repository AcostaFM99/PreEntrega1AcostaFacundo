import React from "react";
import "../App.css";


const Footer = () => {
    return  (
        <div className="row footer container-fluid">
                <div className="col-xl-10">
                    <ul>
                        <li><img src="./imagenes/posible1LOGO.jpg" className="logo" alt="Logo"/></li> 
                    </ul>
                </div>
                <div className="col-xl-2 redesSociiales">
                    <ul>
                        <li><a href="https://www.instagram.com/pinturerias.bro/" ><img className="logoFooter" src="./imagenes/instagram.png" alt=""/></a></li>
                        <li><img className="logoFooter" src="./imagenes/facebook.png" alt=""/></li>
                        <li><img className="logoFooter" src="./imagenes/gorjeo.png" alt=""/></li>
                        <li><img className="logoFooter" src="./imagenes/whatsapp.png" alt=""/></li>
                    </ul>
                </div>
        </div>
    )
}

export default Footer;
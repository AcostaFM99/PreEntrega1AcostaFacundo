import React from "react";
import NavBar from "./NavBar";
import "../App.css";
import CartWidget from "./CartWidget";

const Header =() =>{
    return(
        <div className="header container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <NavBar/>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-end">
                    <CartWidget/>
                </div>
            </div>
        </div>
    )

}   

export default Header;
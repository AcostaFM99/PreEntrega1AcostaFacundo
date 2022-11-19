import React from "react";

const CartWidget =() =>{
    return(
        
        
            <button type="button" className="btn position-relative">
            <img className="carrito" src="./../imagenes/carrito-de-compras.png" alt="Carrito" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">99+</span>
            </button>
    )

}

export default CartWidget;
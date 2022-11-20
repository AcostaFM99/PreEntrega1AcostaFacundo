import React from "react";

const itemListContainer =({greeting}) =>{
    return(
        <div>
            <div className="container"></div>
            <div className="row"></div>
            <div className="col-md-12">
                <div className="alert alert-danger text-center " role="alert">
                    {greeting}
                </div>                
            </div>
        </div>   
    )

}

export default itemListContainer;
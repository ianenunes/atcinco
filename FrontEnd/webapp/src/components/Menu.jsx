import React from "react";
import {Link} from "react-router-dom";

export default function Menu() {
    return (
       
        <nav className="navbar navbar-expand-lg navbar-light bg-sucess p-3">
           
        <Link to="/">Viagens Tur</Link>
        <Link to="/">Home</Link>
        <Link to="/Destinos">Destinos</Link>
        <Link to="/Clientes">Clientes</Link>
    </nav>

   

    );
}
    

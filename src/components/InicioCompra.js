import React from "react";
import { Link } from "react-router-dom";


export const InicioCompra = () => {
    return (
        <div>
             
        <form class="formulario">
            <label for="fname">Nombre y Apellido:</label>
            <input class="textoForm"type="text" id="fname" name="fname"></input>
            <input class="textoForm" type="text" id="fubi" name="fubi"></input>
            <label for="lmail">Mail:</label>
        </form>
       
       <Link to="home">
        <button class="buttonForm" onclick="addCar()">
           Iniciar compra
        </button>
        </Link>
        
        
        </div>
    )
}
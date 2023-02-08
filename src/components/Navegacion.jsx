import React, { Component } from "react";
import Logo from "./images/logo.png";
import './Navegacion.css';


class Navegacion extends Component{
    render (){
        return (
            <div className="container barra">
                <div className="row">
                <nav className="navbar navbar-expand-lg navbar-dark  static-top">
                        <div className="container">                            
                            <img src={Logo} alt="aquiConstruye" id="Home" height="100"></img>
                            <button className="navbar-toggler " type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item btn btn-outline-primary">
                                        Directorio de Profesionales
                                    </li>
                                    <li className="nav-item btn btn-outline-primary" href="#">
                                        Guia de precios
                                    </li>
                                    <li className="nav-item btn btn-outline-primary">
                                        ¿Eres profesional independiente o empresa?
                                    </li>
                                    <li className="nav-item btn btn-outline-primary">
                                        Registrate gratis
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
      )
    }

}
export default Navegacion;
import React, { Component } from "react";
import Construccion from "./images/construccion.jpg"
import Electricidad from "./images/electric.jpg"
import Planos from "./images/planos.jpg"
import Iluminacion from "./images/iluminacion.jpg"
import Arquitectura from "./images/arquitectura.jpg"
import Mecanica from "./images/mecanica.jpg"
import './Categorias.css';


class Categorias extends Component{
    render (){
        return (
            <div className="container categories">
                <div className="row">                    
                        <div className="iconUno col-2">
                            <a href="#" className=" btn border border-primary col-12 h-100">
                              <img className="icon" src={Construccion}></img>
                              <p className="Titulo ">Construccion</p>
                            </a>
                        </div>  
                        <div className="iconUno col-2">
                            <a href="#" className="btn border border-primary col-12 h-100">
                              <img className="icon" src={Planos}></img>
                              <p className="Titulo">Planos</p>
                            </a>
                        </div>
                        <div className="iconUno col-2">
                            <a href="#" className="btn border border-primary col-12 h-100">
                              <img className="icon" src={Electricidad}></img>
                              <p className="Titulo">Electricidad</p>
                            </a>
                        </div>
                        <div className="iconUno col-2">
                            <a href="#" className="btn border border-primary col-12 h-100">
                              <img className="icon" src={Iluminacion}></img>
                              <p className="Titulo">Iluminacion</p>
                            </a>
                        </div>
                        <div className="iconUno col-2">
                            <a href="#" className="btn border border-primary col-12 h-100">
                              <img className="icon" src={Mecanica}></img>
                              <p className="Titulo">Mecanica</p>
                            </a>
                        </div>
                        <div className="iconUno col-2">
                            <a href="#" className="btn border border-primary col-12 h-100">
                              <img className="icon" src={Arquitectura}></img>
                              <p className="Titulo">Arquitectura</p>
                            </a>
                        </div>

                 
                    
                    
                    
                </div>
            </div>    
      )
    }

}
export default Categorias;
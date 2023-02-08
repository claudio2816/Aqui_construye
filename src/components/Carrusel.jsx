import React, { Component } from "react";
import Construccion from "./images/construccion.jpg"
import Electricidad from "./images/electric.jpg"
import Planos from "./images/planos.jpg"
import Iluminacion from "./images/iluminacion.jpg"
import Arquitectura from "./images/arquitectura.jpg"
import Mecanica from "./images/mecanica.jpg"
import './Carrusel.css';


class Carrusel extends Component{
    render (){
        return (
            <div className="container categories">
                <div className="row">                    
                    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active col-2">
                            <a href="#" className=" btn border border-primary ">
                                <img className="icon" src={Construccion}></img>
                                <p className="Titulo ">Construccion</p>
                            </a>
                        </div>  
                        <div className="carousel-item  col-2">
                            <a href="#" className="btn border border-primary  ">
                                <img className="icon" src={Planos}></img>
                                <p className="Titulo">Planos</p>
                            </a>
                        </div>
                        <div className="carousel-item col-2">
                            <a href="#" className="btn border border-primary ">
                                <img className="icon" src={Electricidad}></img>
                                <p className="Titulo">Electricidad</p>
                            </a>
                        </div>
                        <div className="carousel-item col-2">
                            <a href="#" className="btn border border-primary ">
                                <img className="icon" src={Iluminacion}></img>
                                <p className="Titulo">Iluminacion</p>
                            </a>
                        </div>
                        <div className="carousel-item col-2">
                            <a href="#" className="btn border border-primary ">
                                <img className="icon" src={Mecanica}></img>
                                <p className="Titulo">Mecanica</p>
                            </a>
                        </div>
                        <div className="carousel-item col-2">
                            <a href="#" className="btn border border-primary ">
                                <img className="icon" src={Arquitectura}></img>
                                <p className="Titulo">Arquitectura</p>
                            </a>
                        </div>
                        <div className="carousel-item col-2">
                            <a href="#" className="btn border border-primary ">
                                <img className="icon" src={Arquitectura}></img>
                                <p className="Titulo">Arquitectura</p>
                            </a>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                 
                    
                    
                    
                </div>
            </div>    
      )
    }

}
export default Carrusel;


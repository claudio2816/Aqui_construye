

import logo from './images/logo.png';
import './ModalInicio.css';

   const ModalInicio = () => {

  return (
    <div className="container col-12">
        <div className="row">
            <div className="logo col-6 ">
                <img src={logo} className="img-fluid imagen-descripcion" alt="logo"></img>            
            </div>
            <div className="formulario_inicio col-6">
                <div className="col-md-12">
                    <p className="primerP">Encuentra tus servicios de construccion aqui!</p>
                    <p className="segundoP">Encuentra los mejores especialistas para realizar tu proyecto de construccion</p>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary btn-lg w-50 categoria" type="submit" >Categoria </button>
                </div>
                <div className="col-12 ">
                    <button className="btn btn-primary btn-lg w-50 subcategoria" type="submit">Sub-categoria</button>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary btn-lg w-50 registro" type="submit">Registro</button>
                </div>
            </div>
        </div>
    </div>

);
};

export default ModalInicio;
import './App.css';
import ModalInicio from './components/ModalInicio';
import Navegacion from './components/Navegacion';
import Categorias from './components/Categorias';
import Carrusel from './components/Carrusel';

function App() {
  return (
    <div className="App">

      <Navegacion/>
      <Categorias/>
      <Carrusel/>
      <ModalInicio/>
      

    </div>
  );
}

export default App;

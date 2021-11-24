import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemCount } from './components/ItemCount/ItemCount';
import { useState } from 'react';
import { Clicker } from './ejemplos/Clicker/Clicker';
import { FyH } from './ejemplos/Clicker/FyH';



function App() {

  const [mostrar, setMostrar] = useState(true)

  const handleMostrar = () => {
    setMostrar(!mostrar)
  }

  return (
    <div className="App">
      <NavBar />
      <button onClick={handleMostrar}>mostrar</button>
      { mostrar && <FyH /> }
      { mostrar && <Clicker/> }
      
      

      <ItemCount stock={20} initial={5}/>
      {/* <ItemListContainer greeting="Hola Coders!"/> */}

      <Footer />
    </div>
  );
}

export default App;

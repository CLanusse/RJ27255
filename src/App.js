import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <div className="App">
      <NavBar />

      <ItemListContainer greeting="Hola Coders!"/>

      <Footer />
    </div>
  );
}

export default App;

import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartView } from './components/CartView/CartView';

function App() {


  return (
    <BrowserRouter>
     
        <NavBar />

        <Routes>
          <Route path="/" element={ <ItemListContainer/> }/>
          <Route path="/category/:categoryId" element={ <ItemListContainer/>} />
          <Route path="/detail/:itemId" element={ <ItemDetailContainer/> }/>
          <Route path="/cart" element={ <CartView/>} />
          <Route path="*" element={ <Navigate to="/"/> } />
        </Routes>

        <Footer />
      
    </BrowserRouter>
  );
}

export default App;

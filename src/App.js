import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Gallery} from './pages/Gallery';
import { NavBar } from './components/NavBar';
import { Perfil } from './pages/Perfil';
import { Detalle } from './pages/Detalle';
import { Contacto } from './pages/Contacto';


function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />

        <Routes>
          <Route index path='/' element={<Gallery />} />
          <Route path='/dibujo/:id' element={<Detalle />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;

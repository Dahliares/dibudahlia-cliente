import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Gallery} from './pages/Gallery';
import { NavBar } from './components/NavBar';
import { Perfil } from './pages/Perfil';
import { Detalle } from './pages/Detalle';
import { Contacto } from './pages/Contacto';
import { NotFound404 } from './pages/NotFound404';
import { Add } from './pages/Add';

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
          <Route path='/add' element={<Add />} />
          <Route path='/*' element={<NotFound404 />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;

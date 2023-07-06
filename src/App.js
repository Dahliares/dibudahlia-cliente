import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Gallery} from './pages/Gallery';
import { NavBar } from './components/NavBar';
import { Perfil } from './pages/Perfil';
import { Detalle } from './pages/Detalle';


function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />

        <Routes>
          <Route index path='/' element={<Gallery />} />
          <Route path='/:id' element={<Detalle />} />
          <Route path='/perfil' element={<Perfil />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;

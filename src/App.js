import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router';
import Starships from './pages/Starships/Starships';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/starships" element={<Starships />} />
        <Route path="/starships/:id" element={<StarshipDetails />} />
      </Routes>
    </>
  );
}

export default App;

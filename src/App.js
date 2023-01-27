import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router';
import Starships from './pages/Starships/Starships';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/starships" element={<Starships />} />
      </Routes>
    </>
  );
}

export default App;

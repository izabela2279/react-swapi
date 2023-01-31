import { useEffect, useState } from 'react';
import { getAllStarships } from '../../services/api-calls';
import { Link } from 'react-router-dom';
import './Starships.css';

const Starships = () => {
  const [starships, setStarships] = useState([])

  useEffect(()=> {
    const fetchStarships = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
    }
    fetchStarships()
  }, [])

  return (
    <>
      <h3>Starships</h3>
      {starships.length ?
        <>
          {starships.map(starship =>
            <div id="container" key={starship.name}>
              <Link id="ship" to="/starships/:id" state={{starship}}>{starship.name}</Link> 
            </div>
          )}
        </>
        :
        <>
          <h4>Loading starships...</h4>
        </>
      }
    </>
  );
}

export default Starships;
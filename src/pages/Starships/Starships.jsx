import { useEffect, useState } from 'react';
import { getAllStarships } from '../../services/api-calls';
import { Link } from 'react-router-dom';

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
            <div key={starship.name}>
              <Link to="/starship" state={{starship}}>{starship.name}</Link> 
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
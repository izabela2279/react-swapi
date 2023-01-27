import { useEffect, useState } from 'react';

const Starships = () => {
  const [starships, setStarships] = useState([])

  useEffect(()=> {
    console.log('Component mounted!')
  }, [])

  return (
    <>
      <h3>Starships</h3>
      {starships.length ?
        <>
          {starships.map(starship =>
            <div key={starship.index}>
              {starship.name}
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
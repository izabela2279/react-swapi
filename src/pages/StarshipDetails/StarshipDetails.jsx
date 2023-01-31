import { useState, useEffect } from "react"
import { getStarshipDetails } from "../../services/api-calls"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import './StarshipDetails.css';

const StarshipDetails = () => {
  console.log(StarshipDetails);
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    console.log(location);
		const fetchStarshipDetails = async () => {
      const starshipData = await getStarshipDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchStarshipDetails()
  }, [location.state.starship.url])

  return (
    <>
      <section>
      <h3>Starship Specifications</h3>
      <div id="name">
        <h4>Name: {starshipDetails.name}</h4>
        <h4>Model: {starshipDetails.model}</h4>
        <Link to="/starships">Return to Starship List</Link>
      </div>  
      </section> 
    </>
  )
}

export default StarshipDetails;
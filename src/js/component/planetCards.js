import React, {useEffect, useState, useContext} from 'react'
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

export default function PlanetCards() {
  const [planets, setPlanets] = useState([]);
  const {store, actions} = useContext(Context);

  useEffect(() => {
    async function getPlanets() {
      let response = await fetch("https://www.swapi.tech/api/planets/")
      let data = await response.json()
      setPlanets(data.results)
    }
    getPlanets()
  }, [])

  const handleFavorites = (e, name) => {
      e.preventDefault()
      if(store.favs.includes(name)) {
        actions.removeFavs(name)
      }
      else {
        actions.addFavs(name)
      }
    }

return (
  <div className="d-flex col-10 overflow-auto mt-5 mx-auto">
      {planets?.map((planet, index) => (
          <div key={index} className="card" style={{"minWidth": "18rem"}}>
                  <div className="card-body">
                      <h5 className="card-title">{planet.name}</h5>
                      <p className="card-text">{planet.diameter}</p>
                      <p className="card-text">{planet.climate}</p>
                      <p className="card-text">{planet.population}</p>
                      <Link to={`/planet/${planet.uid}`} href="#" className="btn btn-dark">Learn More</Link>
                      <button onClick={(e) => handleFavorites(e, planet.name)}>❤️</button>
                  </div>
          </div>
      ))}
  </div>
)
}

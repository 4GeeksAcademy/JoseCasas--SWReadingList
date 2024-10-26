import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

export default function SpecieCards() {
  const [species, setSpecies] = useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    async function getSpecies() {
      let response = await fetch("https://www.swapi.tech/api/species/")
      let data = await response.json()
      setSpecies(data.results)
    }
    getSpecies()
  }, [])

  const handleFavorites = (e, name) => {
    e.preventDefault()
    if (store.favs.includes(name)) {
      actions.removeFavs(name)
    }
    else {
      actions.addFavs(name)
    }
  }

  return (
    <div className="d-flex col-10 overflow-auto mt-5 mx-auto">
      {species?.map((specie, index) => (
        <div key={index} className="card" style={{ "minWidth": "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{specie.name}</h5>
            <img src={`https://starwars-visualguide.com/assets/img/species/${specie.uid}.jpg`} className="img-fluid rounded" alt={specie.name} />
            <p className="card-text">{specie.classification}</p>
            <p className="card-text">{specie.average_height}</p>
            <p className="card-text">{specie.average_lifespan}</p>
            <Link to={`/specie/${specie.uid}`} href="#" className="btn btnI mx-2"><i class="fa-regular fa-circle-question"></i> Learn More</Link>
            <span className="btn btnF" onClick={(e) => handleFavorites(e, specie.name)}><i class="fa-regular fa-star"></i> Fav</span>
          </div>
        </div>
      ))}
    </div>
  )
}
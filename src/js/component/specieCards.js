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
            <p className="card-text">{specie.classification}</p>
            <p className="card-text">{specie.average_height}</p>
            <p className="card-text">{specie.average_lifespan}</p>
            <Link to={`/specie/${specie.uid}`} href="#" className="btn btn-dark">Learn More</Link>
            <button onClick={(e) => handleFavorites(e, specie.name)}>❤️</button>
          </div>
        </div>
      ))}
    </div>
  )
}
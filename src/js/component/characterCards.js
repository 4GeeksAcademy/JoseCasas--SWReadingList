import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

export default function CharacterCards() {
  const [characters, setCharacters] = useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    async function getCharacters() {
      let response = await fetch("https://www.swapi.tech/api/people/")
      let data = await response.json()
      setCharacters(data.results)
    }
    getCharacters()
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
      {characters?.map((character, index) => (
        <div key={index} className="card" style={{ "minWidth": "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-title">{character.skin_color}</p>
            <p className="card-title">{character.height}</p>
            <p className="card-title">{character.mass}</p>
            <Link to={`/character/${character.uid}`} href="#" className="btn btn-dark">Learn More</Link>
            <button onClick={(e) => handleFavorites(e, character.name)}>❤️</button>
          </div>
        </div>
      ))}
    </div>
  )
}

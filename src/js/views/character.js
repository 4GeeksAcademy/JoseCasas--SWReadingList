import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../store/appContext';
import { useParams } from 'react-router'

export default function Character() {
  const { id } = useParams()
  const [character, setCharacter] = useState({});
  const { store, actions } = useContext(Context);

  useEffect(() => {
    async function getCharacter() {
      let response = await fetch(`https://www.swapi.tech/api/people/${id}`)
      let data = await response.json()
      setCharacter(data.result.properties)
    }
    getCharacter()
  }, [])

  return (
    <div className="container d-flex justify-content-between pt-2">
      <div className="col-md-4">
        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="img-fluid" alt={character.name} />
      </div>
      <div className="col-md-8">
        <h1>{character.name}</h1>
        <div className="row">
          <div className="col-md-4">
            <strong>Name:</strong>
            <p>{character.name}</p>
          </div>
          <div className="col-md-4">
            <strong>Birth Year:</strong>
            <p>{character.birth_year}</p>
          </div>
          <div className="col-md-4">
            <strong>Gender:</strong>
            <p>{character.gender}</p>
          </div>
          <div className="col-md-4">
            <strong>Height:</strong>
            <p>{character.height}</p>
          </div>
          <div className="col-md-4">
            <strong>Skin Color:</strong>
            <p>{character.skin_color}</p>
          </div>
          <div className="col-md-4">
            <strong>Eye Color:</strong>
            <p>{character.eye_color}</p>
          </div>
        </div>
      </div>

    </div>
  )
}
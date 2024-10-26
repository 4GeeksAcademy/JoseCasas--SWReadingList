import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../store/appContext';
import { useParams } from 'react-router'

export default function Specie() {
  const { id } = useParams()
  const [specie, setSpecie] = useState({});
  const { store, actions } = useContext(Context);

  useEffect(() => {
    async function getSpecie() {
      let response = await fetch(`https://www.swapi.tech/api/species/${id}`)
      let data = await response.json()
      setSpecie(data.result.properties)
    }
    getSpecie()
  }, [])

  return (
    <div className="container d-flex justify-content-between pt-2">
      <div className="col-md-4">
        <img src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`} className="img-fluid" alt={specie.name} />
      </div>
      <div className="col-md-8">
        <h1>{specie.name}</h1>
        <div className="row">
          <div className="col-md-4">
            <strong>Name:</strong>
            <p>{specie.name}</p>
          </div>
          <div className="col-md-4">
            <strong>Classification:</strong>
            <p>{specie.classification}</p>
          </div>
          <div className="col-md-4">
            <strong>Average Height:</strong>
            <p>{specie.average_height}</p>
          </div>
          <div className="col-md-4">
            <strong>Average Lifespan:</strong>
            <p>{specie.average_lifespan}</p>
          </div>
          <div className="col-md-4">
            <strong>Skin Colors:</strong>
            <p>{specie.skin_colors}</p>
          </div>
          <div className="col-md-4">
            <strong>Language:</strong>
            <p>{specie.language}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
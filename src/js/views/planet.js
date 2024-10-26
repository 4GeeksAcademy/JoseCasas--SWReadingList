import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../store/appContext';
import { useParams } from 'react-router'

export default function Planet() {
  const { id } = useParams()
  const [planet, setPlanet] = useState({});
  const { store, actions } = useContext(Context);

  useEffect(() => {
    async function getPlanet() {
      let response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
      let data = await response.json()
      setPlanet(data.result.properties)
    }
    getPlanet()
  }, [])

  return (
    <div className="container d-flex justify-content-between pt-2">
      <div className="col-md-4">
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="img-fluid" alt={planet.name} />
      </div>
      <div className="col-md-8">
        <h1>{planet.name}</h1>
        <div className="row">
          <div className="col-md-4">
            <strong>Name:</strong>
            <p>{planet.name}</p>
          </div>
          <div className="col-md-4">
            <strong>Climate:</strong>
            <p>{planet.climate}</p>
          </div>
          <div className="col-md-4">
            <strong>Diameter:</strong>
            <p>{planet.diameter}</p>
          </div>
          <div className="col-md-4">
            <strong>Gravity:</strong>
            <p>{planet.gravity}</p>
          </div>
          <div className="col-md-4">
            <strong>Population:</strong>
            <p>{planet.population}</p>
          </div>
          <div className="col-md-4">
            <strong>Terrain:</strong>
            <p>{planet.terrain}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
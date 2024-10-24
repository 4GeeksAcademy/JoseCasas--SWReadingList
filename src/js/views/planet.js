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
      setPlanet(data.results.properties)
    }
    getPlanet()
  }, [])

  return (
    <div>
      <h1>Name:</h1>
      <p>{planet.name}</p>
      <h3>Climate:</h3>
      <p>{planet.climate}</p>
      <h3>Population:</h3>
      <p>{planet.population}</p>


    </div>
  )
}
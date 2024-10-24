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
    <div>
      <h1>Name:</h1>
      <p>{specie.name}</p>
      <h3>classification:</h3>
      <p>{specie.classification}</p>
      <h3>X height:</h3>
      <p>{specie.average_height}</p>
    </div>
  )
}
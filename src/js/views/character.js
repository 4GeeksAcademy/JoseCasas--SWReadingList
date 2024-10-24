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
    <div>
      <h1>Name:</h1>
      <p>{character.name}</p>
      <h3>Height:</h3>
      <p>{character.height}</p>
      <h3>Gender:</h3>
      <p>{character.gender}</p>


    </div>
  )
}
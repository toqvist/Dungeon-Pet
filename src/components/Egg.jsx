import React from 'react'

export default function Egg({type, sprite, createPet}) {

  return (
    <button onClick={() => createPet(type)}>{type}</button>
  )
}

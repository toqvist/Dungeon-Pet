import React from 'react'

export default function NewPetButton({isAlive, resetPet}) {
  return (
    <>
    {!isAlive && <button className='new-pet-button' onClick={resetPet}>Adopt new pet</button> }
    </>
  )
}

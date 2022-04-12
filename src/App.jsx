import { useState } from 'react'
import { SpriteAnimator } from 'react-sprite-animator'
import { orky, shroomy, valiant, impy, zomby } from './pet_codex.js'

function App() {

  const [activePet, setActivePet] = useState();

  function createPet() {
    pet = {
      age: "egg",
      type: "orky",
      idle: orky.baby.idle,
      run: orky.baby.run
    }
    setActivePet(pet);
  }

  return (
    <div className="App">
     
    </div>
  )
}

export default App

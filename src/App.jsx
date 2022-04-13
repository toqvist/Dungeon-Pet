import { useState } from 'react'
import { SpriteAnimator } from 'react-sprite-animator'
import { orky, shroomy, valiant, impy, zomby, getAnimProps, petList } from './pet_codex.js'
import Eggs from './components/Eggs.jsx'
import PetElement from './components/PetElement.jsx'
import {Pet}  from './Pet.js'

import './app.css'

function App() {

  const [activePet, setActivePet] = useState();
  const [animProps, setAnimProps] = useState({
    height: 32,
    width: 32,
    frameCount: 4,
    fps: 6,
    shouldAnimate: true
  });

  function createPet(type) {

    let newPet = new Pet(type, 'baby');

    setActivePet(newPet);

    const newProps = getAnimProps(newPet.age);
    setAnimProps(newProps);

  }

  function resetPet() {
    setActivePet(null);
    setAnimProps(getAnimProps("egg"));
  }
  function growPet() {
    
    const newAge = activePet.grow();
    activePet.age = newAge;

    setAnimProps(getAnimProps(newAge));
    console.log(activePet.age)
    
  }

  return (
    <div className="App">

      {activePet ? <div>
        <nav>
          <button onClick={() => resetPet()}>New pet</button>
          <button onClick={() => growPet()}>Grow pet</button>
        </nav>
        <PetElement activePet={activePet} />
      </div> : <Eggs createPet={createPet} />

      }

    </div>
  )
}

export default App

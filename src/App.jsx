import { useState, useRef } from 'react'
import { SpriteAnimator } from 'react-sprite-animator'
import { orky, shroomy, valiant, impy, zomby, getAnimProps, petList } from './pet_codex.js'
import Eggs from './components/Eggs.jsx'
import PetElement from './components/PetElement.jsx'
import { Pet } from './Pet.js'
import set from "./sprites/set.svg";

import './app.css'

function App() {

  const [activePet, setActivePet] = useState();
  const [update, setUpdate] = useState(false);

  const petNameRef = useRef();
  function createPet(type) {

    let newPet = new Pet(type, 'baby');
    setActivePet(newPet);
  }

  function resetPet() {
    setActivePet(null);
    setAnimProps(getAnimProps("egg"));
  }
  function growPet() {
    const newAge = activePet.grow();
    activePet.age = newAge;

    //PetElement won't update if I don't make a stage change with a setter
    setUpdate(!update);

  }
  function namePet(name) {
    activePet.namePet(name);
    setUpdate(!update);
  }
  return (
    <div className="App">

      {activePet ? <>
        <nav>
              <button onClick={() => resetPet()}>New pet</button>
              <button onClick={() => growPet()}>Grow pet</button>
              {activePet.name ? <></> :
                <>
                  <input type="text" ref={petNameRef} />
                  <button onClick={() => namePet(petNameRef.current.value)}>Name</button>
                </>}
            </nav>
        </>: <></>}
      <div style={{ backgroundImage: `url(${set})` }}
        className='game-grid'

      >

        {activePet ?
          <div>
            
            <PetElement activePet={activePet} update={update} />
          </div>
          : <div>
            <Eggs createPet={createPet} />
          </div>

        }
      </div>
    </div>
  )
}

export default App

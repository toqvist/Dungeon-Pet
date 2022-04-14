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

    setActivePet({
      ...activePet, // Copy the old fields
      age: newAge // But override this one
    });

      updateSpriteAnimations();
    //PetElement won't update if I don't make a stage change with a setter
    // setUpdate(!update);

  }
  function namePet(name) {
    activePet.namePet(name);
    setUpdate(!update);
  }

  function feedPet(value) {
    activePet.addFood(value);
    setUpdate(!update);
  }
  function entertainPet(value) {
    activePet.addFun(value);
    setUpdate(!update);
  }

  function updateSpriteAnimations () {
    
    //Get the appropriate sprites for the current pet
    const pet = petList.find(pet => pet.type === type);
    const newIdle = pet[age].idle
    const newHatching = pet[age].hatching
    const newRun = pet[age].run;
  
    const newAnimprops = getAnimProps(age);

    setActivePet({
      ...activePet, // Copy the old fields
      idle : newIdle,
      hatching : newHatching,
      run : newRun,
      animProps : newAnimprops
    });

  }

  return (
    <div className="App" >

      {activePet ? <>
        <nav className='top-bar'>
          <p>hunger:{activePet.hunger} fun: {activePet.fun}</p>
          <button onClick={() => feedPet(2)}>Feed</button>
          <button onClick={() => entertainPet(1)}>Pet</button>
        </nav>
        
      </> 
      : <></>}
      <div style={{ backgroundImage: `url(${set})` }}
        className='game-grid'>

        {activePet ?
          <div>            
            <PetElement activePet={activePet} update={update} />
          </div>
          : <div>
            <Eggs createPet={createPet} />
          </div>

        }

        {activePet ? <>
          <nav className='admin-panel'>
          <button onClick={() => resetPet()}>New pet</button>
          <button onClick={() => growPet()}>Grow pet</button>
          {activePet.name ? <></> :
            <>
              <input type="text" ref={petNameRef} />
              <button onClick={() => namePet(petNameRef.current.value)}>Name</button>
            </>}
            <p>Time alive: {activePet.timeAlive}</p>
        </nav>
        </> : <></>}
      </div>
    </div>
  )
}

export default App

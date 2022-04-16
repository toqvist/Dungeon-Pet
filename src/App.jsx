import { useState, useRef, useEffect } from 'react'
import { SpriteAnimator } from 'react-sprite-animator'
import { orky, shroomy, valiant, impy, zomby, getAnimProps, petList } from './pet_codex.js'
import Eggs from './components/Eggs.jsx'
import PetElement from './components/PetElement.jsx'
import { Pet } from './Pet.js'
import set from "./sprites/set.svg";

import './app.css'

function App() {

  const [activePet, setActivePet] = useState();

  const [secondsPassed, setSecondsPassed] = useState(0);
  
  const petNameRef = useRef();

  function createPet(type) {

    let newPet = new Pet(type, 'baby');
    setActivePet(newPet);
    console.log(newPet);  
    
  }
  useInterval(passTime, 1000);

  

  //https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }


  function resetPet() {
    setActivePet(null);
    setAnimProps(getAnimProps("egg"));
  }

  //returns pet with updated age
  function growPet() {
    let newAge
    switch(activePet.age) {
        case 'egg':
            newAge = 'baby';
            break;
        case 'baby':
            newAge = 'teen';
            break;
        case 'teen':
            newAge = 'adult';
            break;
        case 'adult':
            newAge = 'dead';
            break;
        case 'dead':
            newAge = 'dead';
            break;
    }
    console.log('newage: ' + newAge);
    const newPet = {
      ...activePet,
      age: newAge 
    };

    //newPet is passed this way because otherwise the following function would overwrite changes
    updateSpriteAnimations(newPet);

  }

  function namePet(newName) {
    setActivePet({
      ...activePet,
      name: newName
    })
  }

  function feedPet(foodValue) {
    const currentHunger = activePet.food
    let newFood
    if (currentHunger > 10) {
      newFood = activePet.maxFood
    } else {
      newFood = currentHunger + foodValue
    }
    setActivePet({
      ...activePet,
      food: newFood 
    });
  }

  function entertainPet(funValue) {
    const currentFun = activePet.fun;
    let newFun
    if ( (currentFun+funValue) > activePet.maxFun ) {
      newFun = activePet.maxFun;
    } else {
      newFun = currentFun + funValue;
    }
    setActivePet({
      ...activePet,
      fun: newFun
    });
  }

  function petDie() {
     const newPet = {
      ...activePet,
      age: 'dead',
      isAlive: false
     }
      updateSpriteAnimations(newPet);
  }

  function startTimer(interval) {
    const newIntervalID = setInterval(passTime, interval);
    setIntervalId(newIntervalID);
  }

  function passTime () {
    if (activePet) {
      
      const newTime = activePet.secondsAlive + 1;
      setSecondsPassed(newTime);
      if(newTime % 5 == 0) {
        decayHungerAndFun();
      }
      
      setActivePet({
        ...activePet,
        secondsAlive: newTime
      });
      console.log("time: " + newTime);
    }
    
  }
 
  function decayHungerAndFun() {
    console.log('decaying hunger and fun');
    console.log(activePet);
    const newHunger = activePet.food - 1;
    const newFun = activePet.fun - 1;
    setActivePet({
      ...activePet,
      food: newHunger,
      fun: newFun
    });
    console.log(newHunger);
    console.log(newFun);

  }

  //Should always be used to update pet, 
  function updateSpriteAnimations (newPet) {
    const age = newPet.age
    //Get the appropriate sprites for the current pet
    const pet = petList.find(pet => pet.type === newPet.type);
    const newIdle = pet[age].idle
    const newHatching = pet[age].hatching
    const newRun = pet[age].run;
  
    const newAnimprops = getAnimProps(age);

    setActivePet({
      ...newPet, // Copy the old fields
      idle : newIdle,
      hatching : newHatching,
      run : newRun,
      animProps : newAnimprops
    });
    console.log({
      ...activePet, // Copy the old fields
      idle : newIdle,
      hatching : newHatching,
      run : newRun,
      animProps : newAnimprops
    })
  }

  return (
    <div className="App" >

      {activePet ? <>
        <nav className='top-bar'>
          <p>hunger:{activePet.food} fun: {activePet.fun}</p>
          <button onClick={() => feedPet(2)}>Feed</button>
          <button onClick={() => entertainPet(1)}>Pet</button>
        </nav>
        
      </> 
      : <></>}
      <div style={{ backgroundImage: `url(${set})` }}
        className='game-grid'>

        {activePet ?
          <div>            
            <PetElement activePet={activePet} />
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
      <h1>{secondsPassed}</h1>
    </div>
  )
}

export default App

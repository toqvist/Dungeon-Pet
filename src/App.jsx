import { useState, useRef, useEffect } from 'react'
import { SpriteAnimator } from 'react-sprite-animator'
import { orky, shroomy, valiant, impy, zomby, getAnimProps, petList } from './pet_codex.js'
import Eggs from './components/Eggs.jsx'
import PetElement from './components/PetElement.jsx'
import { Pet } from './Pet.js'
import set from "./sprites/set.svg";
import NeedBar from './components/NeedBar.jsx'
import './app.css'

function App() {

  const [activePet, setActivePet] = useState();

  const [secondsPassed, setSecondsPassed] = useState(0);

  const petNameRef = useRef();

  function createPet(type) {

    let newPet = new Pet(type, 'egg');
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

  function hatchEgg() {
    growPet();
  }

  function growPet() {
    let newAge
    switch (activePet.age) {
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
    if ((currentHunger + foodValue) > activePet.maxFood) {
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
    if ((currentFun + funValue) > activePet.maxFun) {
      newFun = activePet.maxFun;
    } else {
      newFun = currentFun + funValue;
    }
    setActivePet({
      ...activePet,
      fun: newFun
    });
  }

  function petDie(unfortunatePet) {
    const newPet = {
      ...unfortunatePet,
      age: 'dead',
      isAlive: false,
      food: 0,
      fun: 0
    }
    console.log("pet died! :(");
    updateSpriteAnimations(newPet);
  }

  function passTime() {
    if (activePet && activePet.isAlive && activePet.age !== 'egg') {

      const newTime = activePet.secondsAlive + 1;
      setSecondsPassed(newTime);

      if (newTime % activePet.decayRate == 0) {
        const newPet = {
          ...activePet,
          secondsAlive: newTime
        }
        decayHungerAndFun(newPet);
      } else {
        setActivePet({
          ...activePet,
          secondsAlive: newTime
        });
      }
      // console.log("time: " + newTime);
    }
  }

  function decayHungerAndFun(newPet) {
    const newHunger = activePet.food - activePet.foodDecay;
    const newFun = activePet.fun - activePet.funDecay;

    if (newHunger <= 0) {
      petDie(newPet);
      return
    }

    if (newFun <= 0) {
      petDie(newPet);
      return
    }

    setActivePet({
      ...newPet,
      food: newHunger,
      fun: newFun
    });
  }

  //Should always be used to update pet, 
  function updateSpriteAnimations(newPet) {
    const age = newPet.age
    //Get the appropriate sprites for the current pet
    const pet = petList.find(pet => pet.type === newPet.type);
    const newIdle = pet[age].idle
    const newHatching = pet[age].hatching
    const newRun = pet[age].run;

    const newAnimProps = getAnimProps(age);

    setActivePet({
      ...newPet, // Copy the old fields
      idle: newIdle,
      hatching: newHatching,
      run: newRun,
      animProps: newAnimProps
    });
    console.log(newAnimProps)
  }

  return (
    <div className="App" >

      {/* GAME ACTIONS */}
      {activePet ? <>
        <nav className='top-bar'>
          <div className='needs'>
            <NeedBar need={activePet.food} needMax={activePet.maxFood} icon={'🍏'} />
            <NeedBar need={activePet.fun} needMax={activePet.maxFun} icon={'❤️'} />
          </div>
          <div className="need-buttons">
            <div className="foods">
              <button onClick={() => feedPet(1)}>🍏</button>
              <button onClick={() => feedPet(1)}>🥥</button>
              <button onClick={() => feedPet(2)}>🌮</button>
              <button onClick={() => feedPet(3)}>🍔</button>
            </div>
            <div className="funs">
              <button onClick={() => entertainPet(1)}>Pet❤️</button>
              <button onClick={() => entertainPet(2)}>🍬</button>
              <button onClick={() => entertainPet(3)}>🍫</button>
            </div>
          </div>

        </nav>

      </>
        :
        <></>}

      {/* GAME  */}
      <div style={{ backgroundImage: `url(${set})` }}
        className='game-grid'>

        {activePet ?
          <div className='center-in-grid'>
            <PetElement activePet={activePet} hatchEgg={hatchEgg} />
          </div>
          : <div className='center-in-grid'>
            <Eggs createPet={createPet} />
          </div>

        }
      </div>
      {/* ADMIN PANEL */}
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
            <p>{secondsPassed}</p>
            <p>{activePet.name ? activePet.name : 'this'} is a {activePet.age} {activePet.type}</p>
          </nav>
        </> : <></>}

    </div>
  )
}

export default App

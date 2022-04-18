import { useState, useEffect, useRef } from 'react'
import { SpriteAnimator } from 'react-sprite-animator'
import { orky, shroomy, valiant, impy, zomby, getAnimProps, petList } from './pet_codex.js'
import Eggs from './components/Eggs.jsx'
import PetElement from './components/PetElement.jsx'
import { Pet } from './Pet.js'
import set from "./sprites/set.svg";
import NeedBar from './components/NeedBar.jsx'
import './app.css'
import EnterName from './components/EnterName.jsx'

function App() {

  const [activePet, setActivePet] = useState();

  const [secondsPassed, setSecondsPassed] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [promptFade, setPromptFade] = useState();

  const LOCAL_STORAGE_KEY = 'DungeonPets.Pet';

  useEffect(() => {
    const storedPet = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedPet) {
      setActivePet(storedPet)
      
      if(storedPet.isAlive) {
        setPrompt("Welcome back!")
        setPromptFade(3)
      } else {
        setPrompt(`${storedPet.name ? storedPet.name : 'pet'}` + " has died :(")
      }    
    }

  }, [])

  useEffect(() => {
    if(activePet) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(activePet))
    } else {
      localStorage.clear();
    }
  }, [activePet])



  function createPet(type) {

    let newPet = new Pet(type, 'egg');
    setActivePet(newPet);
    console.log(newPet);
    setPrompt("Click egg to hatch")
  }
  useInterval(passTime, 1000);

  function closeModal() {
    setModalIsOpen(false);
  }
  function openModal() {
    setModalIsOpen(true);
  }

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
    setPrompt('')
    setActivePet(null);
    setAnimProps(getAnimProps("egg"));
    setModalIsOpen(false);

  }

  function hatchEgg() {

    growPet();
    setModalIsOpen(true);
    setPrompt('')

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

  //Name pet entered name or give it a default name
  function namePet(newName) {

    if (newName === 'default') {
      newName = activePet.type
    }

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
    setPrompt(`${activePet.name ? activePet.name : 'pet'}` + " has died :(")
    updateSpriteAnimations(newPet);
    setModalIsOpen(false);
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
    
    if (promptFade) {
      
      setPromptFade(promptFade - 1)
    }
    if (promptFade <= 0) {
      setPrompt('')
      
      
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
    <div className="App site-wrapper" >
      <div className="game-wrapper">

        {/* GAME ACTIONS */}
        <nav className={`top-bar `}>
          {activePet ? <>

            <div className={`needs ${activePet.age != 'egg' ? 'visible' : ''}`}>
              <NeedBar need={activePet.food} needMax={activePet.maxFood} icon={'🍏'} />
              <NeedBar need={activePet.fun} needMax={activePet.maxFun} icon={'❤️'} />
            </div>
            <div className={`need-buttons ${activePet.age != 'egg' ? 'visible' : ''}`}>
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

          </>
            :
            <></>}
        </nav>

        {/* GAME  */}

        <div style={{ backgroundImage: `url(${set})` }}
          className='game-grid'>
          <EnterName modalIsOpen={modalIsOpen} namePet={namePet} closeModal={closeModal}></EnterName>
          {activePet ?
            <div className='center-in-grid'>
              <PetElement activePet={activePet} hatchEgg={hatchEgg} />
            </div>

            :
            <Eggs createPet={createPet} />
          }
          {prompt ? <p className='prompt'>{prompt}</p> : <></>}
        </div>
        {/* ADMIN PANEL */}
        {activePet ? <>
          <nav className='admin-panel'>
            <button onClick={() => resetPet()}>New pet</button>
            <button onClick={() => growPet()}>Grow pet</button>
            <button onClick={openModal}>Name pet</button>
            <button onClick={() => petDie(activePet)}>Die</button>
            <p>Time alive: {secondsPassed}</p>
            <p>{activePet.name ? activePet.name : 'this'} is a {activePet.age} {activePet.type}</p>

          </nav>
        </> : <></>}
      </div>

    </div>
  )
}

export default App

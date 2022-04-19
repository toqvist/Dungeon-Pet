import { useState, useEffect, useRef } from 'react'
import { SpriteAnimator } from 'react-sprite-animator'
import { orky, shroomy, valiant, impy, zomby, getAnimProps, petList } from './pet_codex.js'
import { Pet } from './Pet.js'

import Eggs from './components/Eggs.jsx'
import PetElement from './components/PetElement.jsx'
import NewPetButton from './components/NewPetButton.jsx'
import set from "./sprites/set.svg";
import NeedBar from './components/NeedBar.jsx'
import EnterName from './components/EnterName.jsx'

import './app.css'


function App() {

  const [activePet, setActivePet] = useState();

  const [secondsPassed, setSecondsPassed] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [promptFade, setPromptFade] = useState();
  const [adminPanel, setAdminPanel] = useState(false);
  const [petName, setPetName] = useState('');

  const LOCAL_STORAGE_KEY = 'DungeonPets.Pet';

  useEffect(() => {
    const storedPet = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedPet) {
      setActivePet(storedPet)

      if (storedPet.isAlive) {
        setPrompt("Welcome back!")
        setPromptFade(3)
      } else {
        setPrompt(`${storedPet.name ? storedPet.name : 'pet'}` + " has died :(")
      }
    }

  }, [])

  useEffect(() => {
    if (activePet) {
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
    setPetName('')
    setActivePet(null);
    setAnimProps(getAnimProps("egg"));
    setModalIsOpen(false);

  }

  function hatchEgg(egg) {
    console.log('hatching')
    setModalIsOpen(true);
    setPrompt('')
    const newPet = {
      ...egg,
      age: nextAge(egg.age)
    }
    updateSpriteAnimations(newPet);
    
  }

  function growPet() {
  
   if(activePet.age === "egg") {
    hatchEgg(activePet);
    return
   } 

   if (activePet.age === "adult") {
     petDie(activePet);
     return
   }
   
   const newPet = {
      ...activePet,
      age: nextAge(activePet.age),
    };
    //newPet is passed this way because otherwise the following function would overwrite changes
    updateSpriteAnimations(newPet);

  }

  function nextAge(age) {
    let newAge
    switch (age) {
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
    return newAge

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
    setPetName(newName)

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

    let grow = false
    let decayFood = false
    let decayFun = false


    //There needs to be a pet that is alive
    if (activePet && activePet.isAlive) {
      const newTime = activePet.secondsAlive + 1;
      setSecondsPassed(newTime);
      
      let newPet = {
        ...activePet,
        secondsAlive: newTime
      }

      //Food and fun should not decay if pet is still an egg
      if (activePet.age !== 'egg' && newTime % activePet.decayRate == 0) {

        decayFood = true
        decayFun = true

      }

      if (newTime % activePet.growthRate === 0) {
        grow = true
      }

      updatePet(newPet, grow, decayFood, decayFun);
      
      //Prompt
      if (promptFade) {
        setPromptFade(promptFade - 1)
      }

      if (promptFade <= 0) {
        setPrompt('')

      }
    }
  }

  //Used to update several pet variables at once, from passTime usually
  function updatePet(petToUpdate, grow, decayFood, decayFun) {
    let newPet = { ...petToUpdate }
    
    if (grow ) {

      let newAge = nextAge(newPet.age);

      if (newAge === 'baby') {
        hatchEgg(newPet)
        return
      }
      
      if (newAge === 'dead') {
        petDie(newPet)
        return
      }

      newPet = {
        ...newPet,
        age: newAge
      }
    } 

    if (decayFood) {
      newPet = {
        ...newPet,
        food: newPet.food - newPet.foodDecay
      }
    }

    if (decayFun) {
      newPet = {
        ...newPet,
        fun: newPet.fun - newPet.funDecay
      }
    }

    if (newPet.food <= 0 || newPet.fun <= 0) {
      petDie(newPet);
      return
    } else {
      updateSpriteAnimations(newPet);
    }


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

          {activePet ? <>
            <div className='center-in-grid'>
              <PetElement activePet={activePet} hatchEgg={() => hatchEgg(activePet)} />
              
            </div>
            <NewPetButton isAlive={activePet.isAlive} resetPet={resetPet}/>
            </>
            :
            <Eggs createPet={createPet} />
          }
          <EnterName modalIsOpen={modalIsOpen} namePet={namePet} closeModal={closeModal}></EnterName>
          
          {prompt && <p className='prompt'>{prompt}</p>}
          {petName && <p className='pet-name'>{petName}</p>}
        </div>

        {/* ADMIN PANEL */}
        {adminPanel && activePet ? <>
          <nav className='admin-panel'>
            <button onClick={() => resetPet()}>New pet</button>
            <button onClick={() => growPet()}>Grow pet</button>
            <button onClick={() => setModalIsOpen(!modalIsOpen)}>Name pet</button>
            <button onClick={() => petDie(activePet)}>Die</button>
            <button onClick={() => setAdminPanel(false)}>X</button>
            <p>Time alive: {secondsPassed}</p>
            <p>{activePet.name ? activePet.name : 'this'} is a {activePet.age} {activePet.type}</p>
          </nav>
        </> 
        :
        <button onClick={() => setAdminPanel(true)}>Admin Panel</button>
        }
      </div>

    </div>
  )
}

export default App

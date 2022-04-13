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

  const [facing, setFacing] = useState("");

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

  function feedPet(value) {
    activePet.addFood(value);
    setUpdate(!update);
  }
  function entertainPet(value) {
    activePet.addFun(value);
    setUpdate(!update);
  }

  return (
    <div className="App" >

      {activePet ? <>
        <nav className='top-bar'>
          <p>hunger:{activePet.hunger} fun: {activePet.fun}</p>
          <button onClick={() => feedPet(2)}>Feed</button>
          <button onClick={() => entertainPet(2)}>Pet</button>
        </nav>
        
      </> 
      : <></>}
      <div style={{ backgroundImage: `url(${set})` }}
        className='game-grid'>

        {activePet ?
          <div>

            {/* When pet is a component, the props updating do not cause the component to re-render */}
            {/* <PetElement activePet={activePet} update={update} /> */}
            <button onClick={() => flip()} className = 'button-no-style'>
                <SpriteAnimator
                    sprite={activePet.idle}
                    shouldAnimate={activePet.animProps.shouldAnimate}
                    frameCount={activePet.animProps.frameCount}
                    fps={activePet.animProps.fps}
                    width={activePet.animProps.width}
                    height={activePet.animProps.height}
                    className={`${facing ? 'facing-left' : ''}`}
                    
                />
            </button>
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

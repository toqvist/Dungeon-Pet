import { useState } from 'react'
import { SpriteAnimator } from 'react-sprite-animator'
import { orky, shroomy, valiant, impy, zomby, getAnimProps, petList } from './pet_codex.js'
import Eggs from './components/Eggs.jsx'
import Pet from './components/Pet.jsx'
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


    //Create a new pet based on the type passed in
    //and set it as the active pet
    //do this in a switch statement
    let pet

    switch (type) {
      case "orky":
        pet = {
          age: "baby",
          type: "orky",
          idle: orky.baby.idle,
          run: orky.baby.run
        }
        break;
      case "shroomy":
        pet = {
          age: "baby",
          type: "shroomy",
          idle: shroomy.baby.idle,
          run: shroomy.baby.run

        }
        break;

      case "valiant":
        pet = {
          age: "baby",
          type: "valiant",
          idle: valiant.baby.idle,
          run: valiant.baby.run
        }
        break;
      case "impy":
        pet = {
          age: "baby",
          type: "impy",
          idle: impy.baby.idle,
          run: impy.baby.run
        }
        break;
      case "zomby":
        pet = {
          age: "baby",
          type: "zomby",
          idle: zomby.baby.idle,
          run: zomby.baby.run
        }
        break;
      
    }

    setActivePet(pet);

    const newProps = getAnimProps(pet.age);
    setAnimProps(newProps);

  }

  function resetPet() {
    setActivePet(null);
    setAnimProps(getAnimProps("egg"));
  }

  return (
    <div className="App">

      {activePet ? <div>
        <nav>
          <button onClick={() => resetPet()}>New pet</button>
        </nav>
        <Pet activePet={activePet} />
      </div> : <Eggs createPet={createPet} />

      }

    </div>
  )
}

export default App

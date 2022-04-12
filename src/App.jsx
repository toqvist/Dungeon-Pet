import { useState } from 'react'
import { SpriteAnimator } from 'react-sprite-animator'
import { orky, shroomy, valiant, impy, zomby, getAnimProps, petList } from './pet_codex.js'
import Eggs from './components/Eggs.jsx'

function App() {

  const [activePet, setActivePet] = useState();
  const [animProps, setAnimProps] = useState({
    height: 32,
    width: 32,
    frameCount: 4,
    fps: 6,
    shouldAnimate: true
  });
  const [newEggs, setNewEggs] = useState([]);

  function createPet() {
    // const pet = {
    //   age: "baby",
    //   type: "orky",
    //   idle: orky.baby.idle,
    //   run: orky.baby.run
    // }
    const pet = {
      age: "egg",
      type: "orky",
      idle: orky.baby.idle,
      run: orky.baby.run
    }

    setActivePet(pet);

    const newProps = getAnimProps(pet.age);
    setAnimProps(newProps);

  }



  return (
    <div className="App">

      {activePet ? <SpriteAnimator
        sprite={activePet.idle}
        shouldAnimate={animProps.shouldAnimate}
        frameCount={animProps.frameCount}
        fps={animProps.fps}
        width={animProps.width}
        height={animProps.height}
      />
        :
        <div>
          <Eggs createPet={createPet}/>
        </div>
      }

    </div>
  )
}

export default App

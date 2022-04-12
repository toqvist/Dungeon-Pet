import { useState } from 'react'
// import {orchy1_idle} from './assets/pets/Orchy/orchy1_idle.png'
// import sprite from './orchy1_idle.svg'

import orkySrite from './sprites/orky/3_orky_idle.svg'
import shroomySprite from './sprites/shroomy/3_shroomy_idle.svg'
// import sprite from './sprites/impy/3_impy_idle.svg'
// import sprite from './sprites/zomby/3_zomby_idle.svg'
// import sprite from './sprites/shroomy/3_shroomy_idle.svg'

// import sprite from './sprites/valiant/3_valiant_idle.svg'

import { SpriteAnimator } from 'react-sprite-animator'
import { orky, shroomy } from './pet_codex.js'

function App() {


  const [currentPet, setCurrentPet] = useState();
  const [hasPet, setHasPet] = useState(false);

  const spriteHeight = orky.adult.height;
  const spriteWidth = orky.adult.width;
  const [sprite, setSprite] = useState(orky.adult.idle);

  function selectPet (pet) {
    if(pet == "orky") {
      setCurrentPet(orky)
      setSprite(orky.adult.idle)
    } else {
      setCurrentPet(shroomy)
      setSprite(shroomy.adult.idle)
    }
    setHasPet(true)
  }

  

  return (
    <div className="App">
      <div className="sprite-container">

    
         {hasPet && 
          // <SpriteAnimator
          //   sprite={sprite}
          //   shouldAnimate={true}
          //   frameCount={4}
          //   fps={6}
          //   width={spriteWidth}
          //   height={spriteHeight}
          // />
          <SpriteAnimator
            sprite={sprite}
            shouldAnimate={true}
            frameCount={4}
            fps={6}
            width={spriteWidth}
            height={spriteHeight}
          />
         }
         {!hasPet &&<>
          <button onClick={() => selectPet("orky")}>Orky</button>
          <button onClick={() => selectPet("shroomy")}>Shroomy</button>
        </>}
      </div>
    </div>
  )
}

export default App

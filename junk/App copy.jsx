import { useState } from 'react'
import { SpriteAnimator } from 'react-sprite-animator'
import { orky, shroomy, valiant, impy, zomby } from './pet_codex.js'

function App() {

  //CurrentPet should be an object
  const [currentPet, setCurrentPet] = useState(orky);

  const [hasPet, setHasPet] = useState(false);

  const spriteHeight = orky.adult.height;
  const spriteWidth = orky.adult.width;
  const [sprite, setSprite] = useState();
  const [stage, setStage] = useState('adult');

  function selectPet(pet) {
 
    setHasPet(true)

    const newPet = 
    switch(pet) {
      case "orky":
        setSprite(orky.adult.idle);
        setCurrentPet(orky)
        break;
      case "shroomy":
        setSprite(shroomy.adult.idle);
        setCurrentPet(shroomy)
        break;
      case "valiant":
        setSprite(valiant.adult.idle);
        setCurrentPet(valiant)
        break;
      case "impy":
        setSprite(impy.adult.idle);
        setCurrentPet(impy)
        break;
      case "zomby":
        setSprite(zomby.adult.idle);
        setCurrentPet(zomby)
        break;
      default:
        setSprite(orky.adult.idle);
        setCurrentPet(orky)
        break;
    }
  }

  function selectStage(inputStage) {
    
    setStage(stage)
    setSprite(currentPet[inputStage].idle)
    
  }

  return (
    <div className="App">
      <div className="sprite-container">


        {hasPet && <>

          <SpriteAnimator
            sprite={sprite}
            shouldAnimate={true}
            frameCount={4}
            fps={6}
            width={spriteWidth}
            height={spriteHeight}
          />
          <div>
            <button onClick={() => selectEgg()}>Egg</button>
            <button onClick={() => selectBaby()}>Baby</button>
            <button onClick={() => selectAdult()}>Teen</button>
            <button onClick={() => selectAdult()}>Adult</button>
          </div>
        </>}

        {!hasPet && <>
          <button onClick={() => selectPet("orky")}>Orky</button>
          <button onClick={() => selectPet("shroomy")}>Shroomy</button>
          <button onClick={() => selectPet("impy")}>Impy</button>
          <button onClick={() => selectPet("valiant")}>Valiant</button>
          <button onClick={() => selectPet("zomby")}>Zomby</button>
          
        </>}
      </div>
    </div>
  )
}

export default App

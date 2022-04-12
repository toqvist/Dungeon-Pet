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
    // console.log(currentPet)
    // console.log(`${currentPet}.${inputStage}.idle`)
    //setSprite(eval(`${currentPet.name}.${stage}.idle`))
    setSprite(eval(`orky.${inputStage}.idle`))
    setStage(stage)
    
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
            <button onClick={() => selectStage("egg")}>Egg</button>
            <button onClick={() => selectStage("baby")}>Baby</button>
            <button onClick={() => selectStage("teen")}>Teen</button>
            <button onClick={() => selectStage("adult")}>Adult</button>
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

import React from 'react'
import { useState } from 'react'
import { SpriteAnimator } from 'react-sprite-animator'
import { orky, shroomy, valiant, impy, zomby, getAnimProps, petList } from '../pet_codex.js'


export default function Pet({ activePet, hatchEgg }) {

    const [facing, setFacing] = useState("");
    
    function handleClick () {

        if (activePet.age === "egg") {
            hatchEgg();
        } else {
            flip();
        }

    }

    function flip() {
        console.log("flip")
        if (facing === "left") {
            setFacing("");
        } else {
            setFacing("left");
        }
        
    }

    return (
        <>
        <p>{activePet.name ? activePet.name : 'this'} is a {activePet.age} {activePet.type}</p>
        
            <button onClick={() => handleClick()} className = 'button-no-style'>
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
        
        </>
    )
}

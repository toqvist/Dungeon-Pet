import React from 'react'
import { useState } from 'react'
import { SpriteAnimator } from 'react-sprite-animator'
import { orky, shroomy, valiant, impy, zomby, getAnimProps, petList } from '../pet_codex.js'
import { useEffect } from 'react/cjs/react.production.min'
import EmotionBubble from './EmotionBubble.jsx'
import bubbleout from '../sprites/emotions/bubbleout.svg'
import { getEmotionSprite } from '../Emotions.js'

export default function Pet({ activePet, hatchEgg, showEmotion }) {

    const [facing, setFacing] = useState("");

    function handleClick() {

        if (activePet.age === "egg") {
            hatchEgg();
        } else {
            flip();
        }
    }

    function flip() {

        if (facing === "left") {
            setFacing("");
        } else {
            setFacing("left");
        }
    }


    return (
        <>
            <button onClick={() => handleClick()} className='button-no-style pet'>

                <div className='emotion-bubble '>


                    {showEmotion && <EmotionBubble emotion={getEmotionSprite(activePet.emotion)} />}
                    
                    {/* {showEmotion 
                    ? 
                    : <EmotionBubble emotion={bubbleout} frame={1} />
                           
                    } */}
             
                    
                </div>
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

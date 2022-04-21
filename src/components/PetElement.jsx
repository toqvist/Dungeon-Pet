import React from 'react'
import { useState } from 'react'
import { SpriteAnimator } from 'react-sprite-animator'
import { orky, shroomy, valiant, impy, zomby, getAnimProps, petList } from '../pet_codex.js'
import { getEmotionSprite } from '../Emotions.js'

export default function Pet({ activePet, hatchEgg }) {

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
                <div>
                    <SpriteAnimator
                        sprite={getEmotionSprite(activePet.emotion)}
                        shouldAnimate={true}
                        frameCount={8}
                        fps={8}
                        width={11}
                        height={11}
                        stopLastFrame={true}
                        className={`facing-right`}
                    />
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

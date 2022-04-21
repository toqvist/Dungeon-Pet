import React from 'react'
import { SpriteAnimator } from 'react-sprite-animator'
import bubbleout from '../sprites/emotions/bubbleout.svg'

export default function EmotionBubble({ emotion }) {
    return (


        <SpriteAnimator
            sprite={emotion}
            shouldAnimate={true}
            frameCount={8}
            fps={8}
            width={11}
            height={11}
            stopLastFrame={true}
            className={``}
            
        />


    )
}

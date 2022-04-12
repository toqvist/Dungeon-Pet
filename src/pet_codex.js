{/* <SpriteAnimator
    sprite={sprite}
    shouldAnimate={true}
    frameCount={4}
    fps={6}
    width={spriteWidth}
    height={spriteHeight}
/> */}

// import orkyEggIdle from './sprites/orky/0_orky_idle.svg';
import orkyBabyIdle from './sprites/orky/1_orky_idle.svg';
import orkyTeenIdle from './sprites/orky/2_orky_idle.svg'
import orkyAdultIdle from './sprites/orky/3_orky_idle.svg'


import shroomyBabyIdle from './sprites/shroomy/1_shroomy_idle.svg';
import shroomyTeenIdle from './sprites/shroomy/2_shroomy_idle.svg'
import shroomyAdultIdle from './sprites/shroomy/3_shroomy_idle.svg'



//Most pets at the same stage have the same animation props. 
//except valiant

//Build a constructor with default values for each pet. 
//Constructor takes name of pet
export const orky = {
    egg: {
        
    },
    baby: {
        
    },
    teen: {
        
    },
    adult: {
        idle: orkyAdultIdle,
        height: 32,
        width: 32,
        frameCount: 4,
        fps: 6,
    }
}

export const shroomy = {
    egg: {
        
    },
    baby: {
        
    },
    teen: {
        
    },
    adult: {
        idle: shroomyAdultIdle,
        height: 32,
        width: 32,
        frameCount: 4,
        fps: 6,
    }
}



import orkyEggIdle from './sprites/orky/0_orky_idle.svg';
import orkyBabyIdle from './sprites/orky/1_orky_idle.svg';
import orkyTeenIdle from './sprites/orky/2_orky_idle.svg'
import orkyAdultIdle from './sprites/orky/3_orky_idle.svg'

import shroomyEggIdle from './sprites/shroomy/0_shroomy_idle.svg';
import shroomyBabyIdle from './sprites/shroomy/1_shroomy_idle.svg';
import shroomyTeenIdle from './sprites/shroomy/2_shroomy_idle.svg'
import shroomyAdultIdle from './sprites/shroomy/3_shroomy_idle.svg'
//Import impy sprites
import impyEggIdle from './sprites/impy/0_impy_idle.svg';
import impyBabyIdle from './sprites/impy/1_impy_idle.svg';
import impyTeenIdle from './sprites/impy/2_impy_idle.svg'
import impyAdultIdle from './sprites/impy/3_impy_idle.svg'
//Import valiant sprites
import valiantEggIdle from './sprites/valiant/0_valiant_idle.svg';
import valiantBabyIdle from './sprites/valiant/1_valiant_idle.svg';
import valiantTeenIdle from './sprites/valiant/2_valiant_idle.svg'
import valiantAdultIdle from './sprites/valiant/3_valiant_idle.svg'
//Import zomby sprites
import zombyEggIdle from './sprites/zomby/0_zomby_idle.svg';
import zombyBabyIdle from './sprites/zomby/1_zomby_idle.svg';
import zombyTeenIdle from './sprites/zomby/2_zomby_idle.svg'
import zombyAdultIdle from './sprites/zomby/3_zomby_idle.svg'


function getAnimation(pet, age, action) {
    
}




function getAnimationProps(age) {

    if(age == 'egg') {
        return {
            height: 16,
            width: 16,
            frameCount: 1,
            fps: 1,
        }
    }
    if(age == 'baby') {
        return {
            height: 16,
            width: 16,
            frameCount: 4,
            fps: 6,
        }
    }
    if(age == 'teen') {
        return {
            height: 32,
            width: 32,
            frameCount: 4,
            fps: 6,
        }
    }
    if(age == 'adult') {
        return {
            height: 32,
            width: 32,
            frameCount: 4,
            fps: 6,
        }
    }

}

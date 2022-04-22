//Import orky sprites
import orkyEggIdle from './sprites/orky/0_orky_idle.svg';
import orkyBabyIdle from './sprites/orky/1_orky_idle.svg';
import orkyTeenIdle from './sprites/orky/2_orky_idle.svg'
import orkyAdultIdle from './sprites/orky/3_orky_idle.svg'
//Impport orky run sprites
import orkyEggHatching from './sprites/orky/0_orky_hatching.svg';
import orkyBabyRun from './sprites/orky/1_orky_run.svg';
import orkyTeenRun from './sprites/orky/2_orky_run.svg'
import orkyAdultRun from './sprites/orky/3_orky_run.svg'

//Import shroomy sprites
import shroomyEggIdle from './sprites/shroomy/0_shroomy_idle.svg';
import shroomyBabyIdle from './sprites/shroomy/1_shroomy_idle.svg';
import shroomyTeenIdle from './sprites/shroomy/2_shroomy_idle.svg'
import shroomyAdultIdle from './sprites/shroomy/3_shroomy_idle.svg'
//Import shroomy run sprites
import shroomyEggHatching from './sprites/shroomy/0_shroomy_hatching.svg';
import shroomyBabyRun from './sprites/shroomy/1_shroomy_run.svg';
import shroomyTeenRun from './sprites/shroomy/2_shroomy_run.svg'
import shroomyAdultRun from './sprites/shroomy/3_shroomy_run.svg'

//Import impy sprites
import impyEggIdle from './sprites/impy/0_impy_idle.svg';
import impyBabyIdle from './sprites/impy/1_impy_idle.svg';
import impyTeenIdle from './sprites/impy/2_impy_idle.svg'
import impyAdultIdle from './sprites/impy/3_impy_idle.svg'
//Import impy run sprites
import impyEggHatching from './sprites/impy/0_impy_hatching.svg';
import impyBabyRun from './sprites/impy/1_impy_run.svg';
import impyTeenRun from './sprites/impy/2_impy_run.svg'
import impyAdultRun from './sprites/impy/3_impy_run.svg'

//Import valiant sprites
import valiantEggIdle from './sprites/valiant/0_valiant_idle.svg';
import valiantBabyIdle from './sprites/valiant/1_valiant_idle.svg';
import valiantTeenIdle from './sprites/valiant/2_valiant_idle.svg'
import valiantAdultIdle from './sprites/valiant/3_valiant_idle.svg'
//Import valiant run sprites
import valiantEggHatching from './sprites/valiant/0_valiant_hatching.svg';
import valiantBabyRun from './sprites/valiant/1_valiant_run.svg';
import valiantTeenRun from './sprites/valiant/2_valiant_run.svg'
import valiantAdultRun from './sprites/valiant/3_valiant_run.svg'

//Import zomby sprites
import zombyEggIdle from './sprites/zomby/0_zomby_idle.svg';
import zombyBabyIdle from './sprites/zomby/1_zomby_idle.svg';
import zombyTeenIdle from './sprites/zomby/2_zomby_idle.svg'
import zombyAdultIdle from './sprites/zomby/3_zomby_idle.svg'
//Import zomby run sprites
import zombyEggHatching from './sprites/zomby/0_zomby_hatching.svg';
import zombyBabyRun from './sprites/zomby/1_zomby_run.svg';
import zombyTeenRun from './sprites/zomby/2_zomby_run.svg'
import zombyAdultRun from './sprites/zomby/3_zomby_run.svg'

import skellyIdle from './sprites/skelly/4_skelly_idle.svg';
import skellyRun from './sprites/skelly/4_skelly_run.svg';

export const orky = {
    type: 'orky',
    egg: {
        idle: orkyEggIdle,
        hatching: orkyEggHatching,
        run: orkyEggHatching,
    },
    baby: {
        idle: orkyBabyIdle,
        run: orkyBabyRun,
    },
    teen: {
        idle: orkyTeenIdle,
        run: orkyTeenRun,
    },
    adult: {
        idle: orkyAdultIdle,
        run: orkyAdultRun,
    },
    dead: {
        idle: skellyIdle,
        run: skellyRun,
    }
}

//Create an object for shroomy
export const shroomy = {
    type: 'shroomy',
    egg: {
        idle: shroomyEggIdle,
        hatching: shroomyEggHatching,
        run: shroomyEggHatching,
    },
    baby: {
        idle: shroomyBabyIdle,
        run: shroomyBabyRun,
    },
    teen: {
        idle: shroomyTeenIdle,
        run: shroomyTeenRun,
    },
    adult: {
        idle: shroomyAdultIdle,
        run: shroomyAdultRun,
    },
    dead: {
        idle: skellyIdle,
        run: skellyRun,
    }
}
//Create an object for impy
export const impy = {
    type: 'impy',
    egg: {
        idle: impyEggIdle,
        hatching: impyEggHatching,
        run: impyEggHatching,
    },
    baby: {
        idle: impyBabyIdle,
        run: impyBabyRun,
    },
    teen: {
        idle: impyTeenIdle,
        run: impyTeenRun,
    },
    adult: {
        idle: impyAdultIdle,
        run: impyAdultRun,
    },
    dead: {
        idle: skellyIdle,
        run: skellyRun,
    }
}
//Create an object for valiant
export const valiant = {
    type: 'valiant',
    egg: {
        idle: valiantEggIdle,
        hatching: valiantEggHatching,
        run: valiantEggHatching,
    },
    baby: {
        idle: valiantBabyIdle,
        run: valiantBabyRun,
    },
    teen: {
        idle: valiantTeenIdle,
        run: valiantTeenRun,
    },
    adult: {
        idle: valiantAdultIdle,
        run: valiantAdultRun,
    }, 
    dead: {
        idle: skellyIdle,
        run: skellyRun,
    }
}
//Create an object for zomby
export const zomby = {
    type: 'zomby',
    egg: {
        idle: zombyEggIdle,
        hatching: zombyEggHatching,
        run: zombyEggHatching,
    },
    baby: {
        idle: zombyBabyIdle,
        run: zombyBabyRun,
    },
    teen: {
        idle: zombyTeenIdle,
        run: zombyTeenRun,
    },
    adult: {
        idle: zombyAdultIdle,
        run: zombyAdultRun,
    },
    dead: {
        idle: skellyIdle,
        run: skellyRun,
    }
}

export function getAnimProps(age) {

    if (age == 'egg') {
        return {
            height: 32,
            width: 32,
            frameCount: 1,
            fps: 6,
        }
    }
    if (age === 'baby') {
        return {
            height: 32,
            width: 32,
            frameCount: 4,
            fps: 6,
        }
    }
    if (age === 'teen') {
        return {
            height: 32,
            width: 32,
            frameCount: 4,
            fps: 6,
        }
    }
    if (age === 'adult') {
        return {
            height: 32,
            width: 32,
            frameCount: 4,
            fps: 6,
        }
    }
    if (age === 'dead') {
        return {
            height: 32,
            width: 32,
            frameCount: 4,
            fps: 2,
         }
    }

}
//List of pets and their associated sprites
export const petList = [orky, shroomy, impy, valiant, zomby];


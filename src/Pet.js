import { orky, shroomy, valiant, impy, zomby, getAnimProps, petList } from './pet_codex.js'

export class Pet {

    constructor(type, age, passTime) {
        
        this.type = type;
        this.age = age;
        this.isAlive = true;

        this.name = ''

        this.food = 5;
        this.maxFood = 10;
        this.foodDecay = 1;
        this.foodDecayRate = 60;

        this.fun = 5;
        this.maxFun = 10;
        this.funDecay = 1;
        this.funDecayRate = 30;

        //How often food and fun will decrease
        this.decayRate = 10;
        this.growthRate = 900

        this.emotion = 'okay'

        //Find pet in list from pet codex and get initial sprites
        const pet = petList.find(pet => pet.type === type);
        this.idle = pet[age].idle
        this.hatching = pet[age].hatching
        this.run = pet[age].run;

        console.log(this.idle)
        console.log(this.run)
        console.log(pet[age].run)
        
        //AnimProp is an object with properties related to sprite animation speed and size
        this.animProps = getAnimProps(this.age);

        this.doing = 'idle';
        this.activeSprite = this.idle
        this.speed = 10;

        this.secondsAlive = 0
    }

    getIdle() {
        return this.idle;
    }
    gethatching() {
        return this.hatching;
    }
    getRun() {
        return this.run;
    }
}
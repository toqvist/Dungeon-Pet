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

        this.fun = 5;
        this.maxFun = 10;
        this.funDecay = 1;

        //How often food and fun will decrease
        this.decayRate = 20;
        this.growthRate = 60

        //Find pet in list from pet codex and get initial sprites
        const pet = petList.find(pet => pet.type === type);
        this.idle = pet[age].idle
        this.hatching = pet[age].hatching
        this.run = pet[age].run;
        
        //AnimProp is an object with properties related to sprite animation speed and size
        this.animProps = getAnimProps(this.age);

        this.secondsAlive = 0
    }
}
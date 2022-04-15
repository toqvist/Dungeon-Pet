import { orky, shroomy, valiant, impy, zomby, getAnimProps, petList } from './pet_codex.js'

export class Pet {

    //Possible solutions
    //- Make each method return this object, so that setNewPet(activePet.method) updates the state
    //- Each method returns the new value of the property, then setActivePet(newValue)
    //
    //- Should instead be a class component, these can have state
    //Constructor should contain props
    //- Component should instead be a context
    //-Only use constructor
    //Change all state in App, encapsulated and accessed through object[]

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

        //Find pet in list from pet codex
        const pet = petList.find(pet => pet.type === type);
        this.idle = pet[age].idle
        this.hatching = pet[age].hatching
        this.run = pet[age].run;
        
        this.animProps = getAnimProps(this.age);

        this.secondsAlive = 0
        // this.intervalID = setInterval(passTime.bind(this), 5000);
    }
    
    // stopTimer( ) {
    //     clearInterval(this.intervalID);
    // }

    // passTime() {
    //     this.secondsAlive += 1;
    //     if(this.secondsAlive% 10 === 0) {
    //         this.decay();
    //     }
    // }
    
    decay() {
        this.hunger -= this.hungerDecay;
        this.fun -= this.funDecay;

        console.log('hunger: ' +this.hunger)
        console.log('fun: ' +this.fun)
        if(this.hunger <= 0 || this.fun <= 0) {
            this.die();
        }
    }

}
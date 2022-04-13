import { orky, shroomy, valiant, impy, zomby, getAnimProps, petList } from './pet_codex.js'

export class Pet {

    //idle
    //hatching
    //run

    //hunger 0-10, 0=dead
    //fun 0-10, 0=dead

    constructor(type, age) {
        this.type = type;
        this.age = age;

        this.name = ''

        this.hunger = 5;
        this.maxHunger = 10;

        this.fun = 5;
        this.maxFun = 10;

        //Find pet in list
        const pet = petList.find(pet => pet.type === type);
        this.idle = pet[age].idle
        this.hatching = pet[age].hatching
        this.run = pet[age].run;
        
        this.animProps = getAnimProps(this.age);

        this.timeAlive = 0
        //this.intervalID = setInterval(passTime, [1000]);
        this.intervalID = setInterval(this.#passTime.bind(this), 1000);

        
    }
    
    stopTimer( ) {
        clearInterval(this.intervalID);
    }

    #passTime() {
        this.timeAlive += 1;
    }

    namePet(inputName) {
        this.name = inputName;
    }

    addFood(foodValue) {
        this.hunger += foodValue;
        if (this.hunger > this.maxHunger) {
            this.hunger = this.maxHunger;
        }
    }

    addFun(funValue) {
        this.fun += funValue;
        if(this.fun > this.maxFun) {
            this.fun = this.maxFun;
        }
    }

    //Update sprite
    //Update animProps
    //Return the new age
    grow() {
        const currentAge = this.age

        let newAge

        switch(currentAge) {
            case 'egg':
                newAge = 'baby';
                break;
            case 'baby':
                newAge = 'teen';
                break;
            case 'teen':
                newAge = 'adult';
                break;
            case 'adult':
                newAge = 'dead';
                break;
            case 'dead':
                //Do nothing
                break;
        }
        console.log(newAge)
        const type = this.type
        const age = newAge

        const pet = petList.find(pet => pet.type === type);
        this.idle = pet[age].idle
        this.hatching = pet[age].hatching
        this.run = pet[age].run;
        
        this.animProps = getAnimProps(age);

        return newAge
    }

}
import { orky, shroomy, valiant, impy, zomby, getAnimProps, petList } from './pet_codex.js'

export class Pet {

    constructor(type, age) {
        this.type = type;
        this.age = age;
        this.isAlive = true;

        this.name = ''

        this.hunger = 5;
        this.maxHunger = 10;
        this.hungerDecay = 1;

        this.fun = 5;
        this.maxFun = 10;
        this.funDecay = 1;

        //Find pet in list
        const pet = petList.find(pet => pet.type === type);
        this.idle = pet[age].idle
        this.hatching = pet[age].hatching
        this.run = pet[age].run;
        
        this.animProps = getAnimProps(this.age);

        this.secondsAlive = 0
        //this.intervalID = setInterval(passTime, [1000]);
        this.intervalID = setInterval(this.passTime.bind(this), 1000);
        
    }
    
    stopTimer( ) {
        clearInterval(this.intervalID);
    }

    passTime() {
        this.secondsAlive += 1;
        if(this.secondsAlive% 10 === 0) {
            this.decay();
        }
    }
    
    decay() {
        this.hunger -= this.hungerDecay;
        this.fun -= this.funDecay;

        console.log('hunger: ' +this.hunger)
        console.log('fun: ' +this.fun)
        if(this.hunger <= 0 || this.fun <= 0) {
            this.die();
        }
    }
    die() {
        this.stopTimer();
        console.log('pet died')
        this.age = 'dead';
        this.isAlive = false;
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
                newAge = 'dead';
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
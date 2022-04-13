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
        this.fun = 5;

        //Find pet in list
        const pet = petList.find(pet => pet.type === type);
        this.idle = pet[age].idle
        this.hatching = pet[age].hatching
        this.run = pet[age].run;
        
        this.animProps = getAnimProps(age);

    }

    namePet(inputName) {
        this.name = inputName;
    }

    addFood(foodValue) {
        this.hunger += foodValue;
    }

    addFun(funValue) {
        this.fun += funValue;
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
import { orky, shroomy, valiant, impy, zomby, getAnimProps, petList } from '../pet_codex.js'

class Pet {

    //idle
    //hatching
    //run

    //hunger 0-10 0=dead
    //fun 0-10 0=dead

    constructor(type, age) {
        this.type = type;
        this.age = age;

        this.name = ''
        this.hunger = 5;
        this.fun = 5;

        // this.sprites = getSprites(type, age);

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

    //Gets sprites from pet_codex based on pet type and age
    getSprites(type, age) {
        //Find pet (type) in petList
        const pet = petList.find(pet => pet.type === type);

        let sprites = {};
        sprites[idle] = pet[age].idle;
        if (age === 'egg') {
            sprites[hatching ]= pet[age].hatching
        }
        else {
            sprites[run] = pet[age].run;
        }

        return sprites;
    }


}
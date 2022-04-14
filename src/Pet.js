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

    constructor(type, age) {
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

        //Find pet in list
        const pet = petList.find(pet => pet.type === type);
        this.idle = pet[age].idle
        this.hatching = pet[age].hatching
        this.run = pet[age].run;
        
        this.animProps = getAnimProps(this.age);

        this.secondsAlive = 0
        //this.intervalID = setInterval(passTime, [1000]);
        //Maybe bind a function in app to this?
        //this.intervalID = setInterval(this.passTime.bind(this), 1000);
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
    //Return object with age and alive, deconstructor to update state
    die() {
        this.stopTimer();
        console.log('pet died')
        this.age = 'dead';
        this.isAlive = false;
    }


    namePet(inputName) {
        this.name = inputName;
    }

    //Returns the new appropriate age of the pet
    getNewAge(age) {
        let newAge
        switch(age) {
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
        return newAge
    }



}
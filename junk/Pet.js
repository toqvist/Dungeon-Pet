import Pet

export class Orky {
    #name
    
    constructor (name) {
        this.#name = name
        petList.find(pet => pet.name === name)
    }
}



export class Stopwatch{
    #time = 0;
    #running = false;
    #intervalID;

    constructor(){

    }
    isRunning(){
        return this.#running;
    }
    start(){
        this.#time = 0;
        document.querySelector('p').innerText = this.#time;
        this.#intervalID = setInterval(this.#update.bind(this), 1000);
        this.#running = true;
    }
    stop(){
        clearInterval(this.#intervalID);
        this.#running = false;
    }

    #update(){
        this.#time++;
        document.querySelector('p').innerText = this.#time;
    }
}


function getPet(name) {
    petList.find(pet => pet.name === name)
}

const petList = [ 
    {
        name: 'orky',
        idleAnims: [orkyEggIdle, orkyBabyIdle, orkyTeenIdle, orkyAdultIdle]
    },
    {
        name: 'shroomy',
        idleAnims: [shroomyEggIdle, shroomyBabyIdle, shroomyTeenIdle, shroomyAdultIdle]
    },
    {
        name: 'impy',
        idleAnims: [impyEggIdle, impyBabyIdle, impyTeenIdle, impyAdultIdle]
    },
    {
        name: 'valiant',
        idleAnims: [valiantEggIdle, valiantBabyIdle, valiantTeenIdle, valiantAdultIdle]
    },
    {
        name: 'zomby',
        idleAnims: [zombyEggIdle, zombyBabyIdle, zombyTeenIdle, zombyAdultIdle]
    }
]
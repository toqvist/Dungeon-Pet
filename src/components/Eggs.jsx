import React from 'react'
import Egg from './Egg'
import { useState, useEffect } from 'react'
import { orky, shroomy, valiant, impy, zomby, getAnimProps, petList } from '../pet_codex.js'


export default function Eggs({createPet}) {

    const [newEggs, setNewEggs] = useState([]);

    function createEggs() {
        let selecting = true;
        const eggs = []

        while(selecting) {
            let randomNumber = Math.floor(Math.random() * petList.length)
            let newEgg = "";

            switch (randomNumber) {
                case 0:
                    // newEgg="orky"
                    newEgg = {name:"orky", sprite: orky.egg.idle}
                    break;
                case 1:
                    // newEgg = "shroomy";
                    newEgg = {name:"shroomy", sprite: shroomy.egg.idle}
                    break;
                case 2:
                    // newEgg = "valiant";
                    newEgg = {name:"valiant", sprite: valiant.egg.idle}
                    break;
                case 3:
                    // newEgg = "impy";
                    newEgg = {name:"impy", sprite: impy.egg.idle}
                    break;
                case 4:
                    // newEgg = "zomby";
                    newEgg = {name:"zomby", sprite: zomby.egg.idle}
                    break;
                default:
                    newEgg = {name:"default", sprite: zomby.egg.idle}
                    break;
            }

            if (eggs.some(eggs => eggs.name === newEgg.name)) {
                //Do nothing
            } else {
                eggs.push(newEgg)
            }
        
            if (eggs.length >= 3) {
                selecting = false;
            }
        }

        setNewEggs(eggs);
    }

    //When component mounts, createEggs()
    useEffect(() => {
        createEggs();
    }, [])


    return (
        <>
            {newEggs.map((egg, index) => {

                if(index == 0) {
                    return <Egg position='left-of-center' key={index} type={egg.name} sprite={egg.sprite} createPet={createPet} />
                }
                if(index == 1) {
                    return <Egg position='center-in-grid' key={index} type={egg.name} sprite={egg.sprite} createPet={createPet} />
                }
                if(index == 2) {
                    return <Egg position='right-of-center' key={index} type={egg.name} sprite={egg.sprite} createPet={createPet} />
                }
                
            })}
        </>
    )
}

import React from 'react'
import { useState, useEffect, useRef } from 'react'

export default function PetStorage({ showButtons, setPrompt, activePet, setActivePet, promptFade, activeUser }) {

    const LOCAL_STORAGE_KEY = 'DungeonPets.Pet';

    const API_LOAD = 'http://localhost:8080/load';
    const API_SAVE = 'http://localhost:8080/save';
    const API_TEST = 'http://localhost:8080/test';

    function buildJSON() {

        const json = JSON.stringify(
            {
                petJSON: activePet,
                username: activeUser
            }
        )
        console.log(json)
        return json;

    }

    function loadPet() {

        const json = JSON.stringify({username : activeUser})

        console.log("attempting load")
        fetch(API_LOAD, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: json
        }).then(response => response.json())
            .then(petObject => {
                console.log(petObject)
                setActivePet(petObject)
                setPrompt("Pet loaded!");
            });

    }

    function savePet() {
        let petJSON = buildJSON();

        fetch(API_SAVE, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: petJSON
        }).then(res => {

            setPrompt("Pet saved!");
        });
    }

    function test() {
        let petJSON = buildJSON();

        fetch(API_TEST, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: petJSON
        }).then(response => response.json())
            .then(petObject => {

                console.log(petObject)
                setPrompt("Pet logged!");
            });

    }


    useEffect(() => {
        const storedPet = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedPet) {

            setActivePet(storedPet)

            if (storedPet.isAlive) {
                setPrompt("Welcome back!")
                promptFade.current = 3
            } else {
                setPrompt(`${storedPet.name ? storedPet.name : 'pet'}` + " has died :(")
            }
        }

    }, [])

    useEffect(() => {
        if (activePet) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(activePet))
        } else {
            localStorage.clear();
        }
    }, [activePet])



    return (
        <>
            {showButtons &&
                <>
                {activeUser && <>
                    <button onClick={loadPet}>Load</button>
                    <button onClick={savePet}>Save</button>
                    <button onClick={test}>Test</button>

                </>}
                </>
            }
        </>
    )
}

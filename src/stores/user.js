import {writable} from 'svelte/store'

export const user = writable({
    name:"Vampirejs",
    password:"vampriejs",
    testGiven:3,
    points:30
})
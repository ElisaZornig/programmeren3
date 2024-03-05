console.log("Hello")
let Denise = {
    name: "Denise",
    type: "human",
    race: "kaasman",
    age: 4,
    vaccinated: true,
    male: false,
    maxSpeed: 2,
    maxDamage: -1,
}
let Kookt = {
    name: "Kookt",
    type: "human",
    race: "kaasman",
    age: 4,
    vaccinated: true,
    male: false,
    maxSpeed: 2,
    maxDamage: -1,
}

let bas = {
    type: "human",
    race: "kaasman",
    age: 4,
    vaccinated: true,
    male: false,
    maxSpeed: 2,
    maxDamage: -1,
    parents: [Denise, Kookt],
}



console.log(bas.parents[0])

for (let i = 0; i < bas.parents.length; i++){
    console.log(bas.parents[i].name)
}
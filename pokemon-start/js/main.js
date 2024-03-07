window.addEventListener('load', getPokemonData);

//Globals
const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';
let gallery
/**
 * Initialize after the DOM is ready
 */
function getPokemonData()
{
    fetch(apiUrl)
        .then(response =>
        {
            if(!response.ok){
                throw new Error("huuuuhhhh waarom nou")
            }
            return response.json()
        })
        .then(response => logPokemonData(response))
        .catch(errorHandler)
}
function logPokemonData(data){
    gallery = document.getElementById("pokemon-gallery")
    for(let i = 0; i < data.results.length; i++){
        console.log(data.results[i].name)
        let pokemonCard = document.createElement("DIV")
        pokemonCard.innerText = data.results[i].name
        pokemonCard.classList.add("pokemon-card")
        gallery.append(pokemonCard);
    }
}

function errorHandler(error){
    console.log(error.message)
}
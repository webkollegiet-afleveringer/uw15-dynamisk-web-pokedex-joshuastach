

let currentOffset = 0
let limit = 20

const main = document.querySelector(".main")
const header = document.querySelector(".header")

const mainString = /* html */ `
    <ul class="pokemon-listing">

    </ul>

`

main.insertAdjacentHTML("beforeend", mainString)
const pokemonListingDom = document.querySelector(".pokemon-listing")


function fetchPokemon(currentOffset) {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${currentOffset}`


    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(url);
            displayPokemon(data)
        }
        )


}



function displayPokemon(data) {

    const pokemonString = data.results.map((pokemon) => {
        const pokemonUrl = pokemon.url
        const pokemonNumber = getIdFromPokemon(pokemonUrl)
        // const urlNumber = /(\d+)\/$/;
        // const urlFound = pokemonUrl.match(urlNumber);


        return /* html */`
            <li class="pokemon">
                <small class="number">${formatPokemonNumber(pokemonNumber)}</small>
                <figure class="pokemon-image">
                <a href="detalje.html?id=${pokemonNumber}">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonNumber}.png" alt="${pokemon.name}">
                        <figcaption class="pokemon-name">
                        <h2 class="pokemon-name">
                                ${pokemon.name}
                        </h2>
                        </figcaption>
                        </a>
                </figure>
            </li>
        `
    }).join("")

    pokemonListingDom.insertAdjacentHTML("beforeend", pokemonString)

    // let observedPokemon = document.querySelector(".pokemon-listing .pokemon:nth-last-child(5)")
    // // console.log(observedPokemon);

    // observer.observe(observedPokemon)

}


// fetchPokemon()

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             currentOffset += 20
//             // console.log(currentOffset);
//             observer.unobserve(entry.target)
//             fetchPokemon(currentOffset)
//         }
//     })
// }, {
//     threshold: 1
// })


const headerString = /* html */
    `
        <section class="headline">
            <h1>Pokédex</h1>
            <img src="/img/PokeBall.svg" alt="pokeball image logo" class="pokeballings">
        </section>
        <div class="search"> 
            <input type="search" placeholder="Search" class="inputting search">
            <button>
            #
            </button>
        </div>
    `
header.insertAdjacentHTML("beforeend", headerString)



let baseURL = "https://pokeapi.co/api/v2/pokemon";


// const pokemonWrapperDom = main.insertAdjacentHTML("beforeend", `<div> id="pokemon-wrapper"><div class="pokemon-inner-wrapper></div></div>`);

let pokemons = []



async function init() {

    const pokemonNumbers = 1350
    const url = `${baseURL}?limit=${pokemonNumbers}`
    console.log(url);

    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
    pokemons = data.results
    // console.log(data);

    //renderHeader(letter)

    const searchDom = document.querySelector(".search")

    searchPokemon(searchDom)
}
init()
function searchPokemon(searchDom) {
    searchDom.addEventListener("input", (event) => {
        const inputValue = event.target.value.toLowerCase()
        runSearch(inputValue);
        console.log(searchDom);

    });
}

function runSearch(inputValue) {
    const value = inputValue.trim()
    console.log(inputValue);

    if (!value) {
        pokemonWrapperDom.innerHTML = "";
        return;
    }


    let pokemonSearchArray;
    pokemonSearchArray = searchByName(pokemons, value);
    console.log(pokemonSearchArray);


    displayPokemons(pokemonSearchArray);

}

function displayPokemons(data) {

    pokemonListingDom.innerHTML = ""
    const pokemonTemplate = data.map((pokemon) => {
        console.log(pokemon);
        const pokemonUrl = pokemon.url

        const pokemonNumber = getIdFromPokemon(pokemonUrl)


        return /* html */`
            <li class="pokemon">
                <small class="number">#${formatPokemonNumber(pokemonNumber)}</small>
                <figure class="pokemon-image">
                <a href="detalje.html?id=${pokemonNumber}">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonNumber}.png" alt="${pokemon.name}">
                        <figcaption class="pokemon-name">
                        <h2 class="pokemon-name">
                                ${pokemon.name}
                        </h2>
                        </figcaption>
                        </a>
                </figure>
            </li>
        `

    }).join("")

    pokemonListingDom.insertAdjacentHTML("beforeend", pokemonTemplate)
}

function getIdFromPokemon(pokemonUrl) {
    // const urlNumber = /(\d+)\/$/;
    // return urlFound = pokemonUrl.match(urlNumber);
    return pokemonUrl.slice(0, -1).split("/").pop();
}

function formatPokemonNumber(id) {
    return "#" + String(id).padStart(3, "0");
}

function searchByName(pokemonsArray, letter) {
    console.log(pokemonsArray, letter);

    return pokemonsArray.filter((pokemon) =>
        pokemon.name.includes(letter.toLowerCase())
    );
}
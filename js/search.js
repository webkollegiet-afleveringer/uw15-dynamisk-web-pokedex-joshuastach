
const main = document.querySelector(".main")
let baseURL = "https://pokeapi.co/api/v2/pokemon";


const pokemonWrapperDom = main.insertAdjacentHTML("beforeend", `<div> id="pokemon-wrapper"><div class="pokemon-inner-wrapper></div></div>`);

let pokemons = []



async function init() {

    const pokemonNumbers = 1350
    const url = `${baseURL}?limit=${pokemonNumbers}`
    console.log(url);

    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
    // pokemons = data.results
    // console.log(data);

    //renderHeader(letter)

    const searchDom = document.querySelector(".search")

    searchPokemon(searchDom)
}


function searchPokemon(searchDom) {
    searchDom.addEventListener("input", (event) => {
        const inputValue = event.target.value.toLowerCase()
        runSearch(inputValue);
        console.log(searchDom);

    });
}

function runSearch(inputValue) {
    const value = inputValue.trim()

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
    console.log(data);

    const pokemonTemplate = data.results.map((pokemon) => {
        const pokemonUrl = pokemon.url
        const urlNumber = /(\d+)\/$/;
        const urlFound = pokemonUrl.match(urlNumber);

        return /* html */`
            <li class="pokemon">
                <small class="number">#${urlFound[1]}</small>
                <figure class="pokemon-image">
                <a href="detalje.html?id=${urlFound[1]}">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${urlFound[1]}.png" alt="${pokemon.name}">
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

function searchByName(pokemonsArray, letter) {
    return pokemonsArray.filter((pokemon) =>
        pokemon.name.includes(letter.toLowerCase())
    );
}

console.log(pokemons);








// const pokeSearch = document.querySelector(".search")



// let url = `https://pokeapi.co/api/v2/pokemon?limit=${1350}&offset=${currentOffset}`

// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);

//         pokeSearch.addEventListener("keyup", e => {
//             let currentValue = e.target.value.toLowerCase();
//             let pokemons = document.querySelectorAll(".pokemon-name")
//             pokemons.forEach(pokemon => {
//                 if (pokemon.textContent.toLocaleLowerCase().includes(currentValue)) {
//                     pokemon.parentNode.parentNode.parentNode.style.display = "display";
//                 } else {
//                     pokemon.parentNode.parentNode.parentNode.style.display = "none";
//                 }
//                 return;
//             })

//         });


//     })














let currentOffset = 0
let limit = 20

const mains = document.querySelector(".main")
const header = document.querySelector(".header")

const mainString = /* html */ `
    <ul class="pokemon-listing">

    </ul>

`
mains.insertAdjacentHTML("beforeend", mainString)
const pokemonListingDom = document.querySelector(".pokemon-listing")


function fetchPokemon(currentOffset) {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${currentOffset}`


    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(url);
            displayPokemons(data)
        }
        )
}



function displayPokemons(data) {

    const pokemonString = data.results.map((pokemon) => {
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

    pokemonListingDom.insertAdjacentHTML("beforeend", pokemonString)

    let observedPokemon = document.querySelector(".pokemon-listing .pokemon:nth-last-child(5)")
    // console.log(observedPokemon);

    observer.observe(observedPokemon)

}


fetchPokemon()

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            currentOffset += 20
            // console.log(currentOffset);
            observer.unobserve(entry.target)
            fetchPokemon(currentOffset)
        }
    })
}, {
    threshold: 1
})


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



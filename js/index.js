const main = document.querySelector(".main")
const header = document.querySelector(".header")

const mainString = /* html */ `
    <ul class="pokemon-listing">

    </ul>

`
main.insertAdjacentHTML("beforeend", mainString)
const pokemonListingDom = document.querySelector(".pokemon-listing")
const url = new URL("https://pokeapi.co/api/v2/pokemon?limit=25&offset=0")




const headerString = /* html */`
    <section class="headline">
    <h1>Pokédex</h1>
    <img src="/img/PokeBall.svg" alt="pokeball image logo" class="pokeballings">
    </section>
    <div class="search"> 
        <input type="search" placeholder="Search">
        <button>
            #
        </button>
    </div>
`





























fetch(url)
    .then(response => response.json())
    .then(data => data.results.forEach(pokemon => {
        const pokemonUrl = pokemon.url
        const urlNumber = /(\d+)\/$/;
        const urlFound = pokemonUrl.match(urlNumber);
        console.log(urlFound);
        // const picture = new URL(pokemon.url)


        const listPokemonString = /* html */`
            <li class="pokemon">
                <small class="number">#${urlFound[1]}</small>
                <figure class="pokemon-image">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${urlFound[1]}.png" alt="${pokemon.name}">
                        <figcaption class="pokemon-name">
                            <a href="detalje.html?id=${urlFound[1]}">
                            ${pokemon.name}
                            </a>
                        </figcaption>
                </figure>
            </li>
        `
        // console.log(picture);

        console.log(pokemon);
        pokemonListingDom.insertAdjacentHTML("beforeend", listPokemonString)
    }))
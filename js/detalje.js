const pageSearch = window.location.search

console.log(pageSearch);

const params = new URLSearchParams(pageSearch)

console.log(params);

const id = params.get("id")
const wrapping = document.querySelector(".main-wrapper")

console.log(id);


let pokeUrl = `https://pokeapi.co/api/v2/pokemon-form/${id}/`
let pokeInfo = `https://pokeapi.co/api/v2/pokemon/${id}/`
let species = `https://pokeapi.co/api/v2/pokemon-species/${id}/`


console.log(pokeUrl);

const header = document.querySelector(".header")
const main = document.querySelector(".main")
const footer = document.querySelector(".footer")
const body = document.body
fetch(pokeUrl)
    .then(pokesponse => pokesponse.json())
    .then(formData => {
        console.log(formData);
        body.classList.add(formData.types[0].type.name)



        pokéHeaderString = /* html */ `
            <nav class="poké-leave">
                <li class="context">
                    <a href="index.html" class="back"> 
                        <div>
                            ${arrow}
                        </div>
                        <h1>
                            ${formData.pokemon.name}
                        </h1>
                    </a>
                    <p>
                    #${id}
                    </p>
                </li>
            </nav>
        
        `


        pokéMainString = /* html */`
            <div class="poké-wrapper">
                <div class="poké-form">
                    <button class="arrow-form left">
                        ${arrowNoTail}
                    </button>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" alt="${formData.name}" class="pokémon-img">
                    <button class="arrow-form right">
                        ${arrowNoTail}
                    </button>
                </div>
                <div class="poké-info">
                    <section class="elements">
                        <h2 class="about ${formData.types[0].type.name}-text">
                            About
                        </h2>
                        <div class="pills">
                            
                        </div>
                    </section>
                    <div class="w-h-m">

                    </div>
                </div>
            </div>
        `

        main.insertAdjacentHTML("beforeend", pokéMainString)
        header.insertAdjacentHTML("beforeend", pokéHeaderString)
        const elementPills = document.querySelector(".pills")
        const wHM = document.querySelector(".w-h-m")
        formData.types.forEach((element) => {
            console.log(element);
            elementString = /* html */`
                <div class="${element.type.name}">
                    <p>
                        ${element.type.name}
                    </p>
                </div>
            `
            elementPills.insertAdjacentHTML("beforeend", elementString)
        })



        // weight, height, moves, and fecthing stats basically
        fetch(pokeInfo)
            .then(pokebility => pokebility.json())
            .then(ability => {
                console.log(ability);
                wHMString = /* html */`
                        <figure class="weight">
                            <img src="/img/weight.png" alt="weight ${ability.weight}">
                                    
                            <figcaption>
                                    <p>
                                        ${ability.weight}
                                    </p>
                                    
                            </figcaption>
                            <p class="two-col">
                                Weight
                            </p>
                            
                        </figure>
                        <figure class="height">
                            <img src="/img/ruler.png" alt="height ${ability.height}" class="ruler">

                                <figcaption>
                                    <p>
                                        ${ability.height}
                                    </p>                                     
                                </figcaption>
                                <p class="two-col">
                                    Height
                                </p>

                        </figure>
                        <figure class="ability">
                            <img src="" alt="">
                            <figcaption class="abilities">
                                
                            </figcaption>
                            <p>
                                Moves
                            </p>
                        </figure>
                    `
                // console.log(pokeInfo.height);

                wHM.insertAdjacentHTML("beforeend", wHMString)
                const moves = document.querySelector(".abilities")
                ability.abilities.forEach((ability) => {
                    // console.log(ability);
                    abilityString = /* html */`
                        <p>
                            ${ability.ability.name}
                        </p>
                    `
                    moves.insertAdjacentHTML("afterbegin", abilityString)
                })












                const pokéInfo = document.querySelector(".poké-info")
                fetch(species).then(text => text.json())
                    .then(description => {

                        descriptionString = /* html */`
                <div class="description">
                    <p class="text">
                        ${description.flavor_text_entries[9].flavor_text}
                    </p>
                </div>
                `
                        // console.log(pokéInfo);

                        // console.log(description);
                        // console.log(description.flavor_text_entries[9]);


                        pokéInfo.insertAdjacentHTML("beforeend", descriptionString)






                        statString = /* html */`
                    <ul class="${formData.types[0].type.name}-text">
                        <li>
                        
                            
                            <div class="wrapping-container-something">
                            <p>HP</p>
                            <p class="black-text">
                            ${ability.stats[0].base_stat}
                            </p>
                            <progress max="255" value="${ability.stats[0].base_stat}"></progress>
                            </div>
                        </li>
                        <li>
                            
                            <div class="wrapping-container-something">
                            <p>ATK</p>
                            <p class="black-text">
                            ${ability.stats[1].base_stat}
                            </p>
                            <progress max="190" value="${ability.stats[1].base_stat}"></progress>
                            </div>
                        </li>
                        <li>
                            
                            <div class="wrapping-container-something">
                            <p>DEF</p>
                            <p class="black-text">
                            ${ability.stats[2].base_stat}
                            </p>
                            <progress max="230" value="${ability.stats[2].base_stat}"></progress>
                            </div>
                        </li>
                        <li>
                            
                            <div class="wrapping-container-something">
                            <p>SATK</p>
                            <p class="black-text">
                            ${ability.stats[3].base_stat}
                            </p>
                            <progress max="194" value="${ability.stats[3].base_stat}"></progress>
                            </div>
                        </li>
                        <li>
                            
                            <div class="wrapping-container-something">
                            <p>SDEF</p>
                            <p class="black-text">
                            ${ability.stats[4].base_stat}
                            </p>
                            <progress max="230" value="${ability.stats[4].base_stat}"></progress>
                            </div>
                        </li>
                        <li>
                            
                            <div class="wrapping-container-something">
                            <p>SPD</p>
                            <p class="black-text">
                            ${ability.stats[5].base_stat}
                            </p>
                            <progress max="180" value="${ability.stats[5].base_stat}"></progress>
                            </div>
                        </li>
                    </ul>
                `
                        pokéInfo.insertAdjacentHTML("beforeend", statString)
                        console.log(ability.stats[0].base_stat);

                    })

            })



    })

// vis jeg skal være ærlig så burde jeg nok sætte det op til grid istedet for flex, det er ret nemmere og ikke og mindre fejl
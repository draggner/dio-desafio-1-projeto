// Utilizando o DOM para capturar elementos HTML pelo ID.
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

//const maxRecord = 151 - limitação dos pokemons da primeira geração. //const maxRecord = 905 - último pokemon com retorno válido. // const maxRecords = 649 // ultimo pokemon com retorno de foto valida na api
const maxRecords = 151
//const limit = 10 - com base do limite que seria renderizado.
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {// Alterações de identificação do número, logo abaixo:
    return `
        <li class="pokemon ${pokemon.type}" onClick="selectPokemon(${pokemon.number})">
            <span class="number">#0${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

const selectPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const pokemon = await res.json()
    displayPopup(pokemon)
}
  
const displayPopup = (pokemon) => {
        /* 
        Opções de Imagens:
        svg: pokemon.sprites.other.dream_world.front_default
        png: pokemon.sprites.other.home.front_default
        */
    const imagem = pokemon.sprites.other.home.front_default
    const types = pokemon.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type
  
    const htmlString = `
        <div class="modal">
            <div id="details">
                <li class="pokemon-modal ${pokemon.type}">
                    <span class="number">#0${pokemon.id}</span>
                    <span class="name">${pokemon.name}</span>

                        <div class="detail">
                            <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                            </ol>
                        </div>

                    <img id="pokemon-img" src="${imagem}" alt="${pokemon.name}">

                    <div id="data">
                        <h3>Base stats</h3>

                            <div id="stats">

                                <div class="stats-name">
                                ${pokemon.stats.map((name_stats) => `<p>${name_stats.stat.name}</p>`).join('')}
                                </div>

                                <div class="stats-description">
                                ${pokemon.stats.map((base_stats) => `<p>${base_stats.base_stat}</p>`).join('')}
                                </div>
                            </div>

                            <div class="stats-body">
                                <p class="${type}">Altura:${(pokemon.height/10).toFixed(2)} m</p>
                                <p class="${type}">Peso:${(pokemon.weight/10)} kg</p>
                            </div>
                        </div>
                    </div>
                </li>
                <button class="button cancel" id="cancel" onClick="modalClose()">Fechar</button>
            </div>
        </div>

    `
    pokemonList.innerHTML = htmlString + pokemonList.innerHTML
}

const modalClose = () => {
    const close = document.querySelector('.modal')
    close.parentElement.removeChild(close)
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})
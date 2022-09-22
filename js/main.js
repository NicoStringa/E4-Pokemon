const form =document.getElementById('form');
const input =document.getElementById('idInput');
const card =document.querySelector('.poke-card');

let pokemones = JSON.parse(localStorage.getItem('pokemones')) || [];

const saveLocalStorage = (pokemonesList) => {
    localStorage.setItem('pokemones', JSON.stringify(pokemonesList))
}

searchPokemon = async e => {
    e.preventDefault();
    const searchedId = input.value
    const fetchedPokemon = await catchPokemon(searchedId);
    if(!searchedId) {
        emptyError(searchedId);
        return;
    } else {
        renderCard(fetchedPokemon)
    }
};

const renderCard = pokemon => {
    const sprite = pokemon.sprites.front_default;
    const name = pokemon.name
    const hp = pokemon.stats[0].base_stat;
    const weight = pokemon.weight / 10
    const height = pokemon.height / 10
    const type = pokemon.types.map(type => type.type.name).join("/")
    card.innerHTML = `
    <div class="card">
     <div class="card-top"></div>
     <div class="card-body">                
        <img src="${sprite}" class="card-img">
        <h2>Nombre: <br>${name}</br></h2>
        <progress class="helathbar" id="health" value="100" max="100"></progress>
        <p>HP ${hp}/${hp}</p>
     </div>
     <div class="card-bot">   
        <div class="card-stats">
            <h3>${type}</h3>
            <p>Tipo</p>
        </div>
        <div class="card-stats">
            <h3>${height}m</h3>
            <p>Altura</p>
        </div>
        <div class="card-stats">
            <h3>${weight}kg</h3>
            <p>Peso</p>
        </div>
     </div>
    </div>`;
};

const emptyError = () => {
    card.innerHTML =`
    <div class="card-error">
      <h1 class="error-msg">Por favor, ingrese un número.</h1>
    </div>`;
};

const idError = () => {
    card.innerHTML =`
    <div class="card-error">
      <h1 class="error-msg">No existe un Pokemon con el ID seleccionado.</h1>
      <p>Por favor, ingrese otro número.</p>
    </div>`;
};

const init = () => {
    form.addEventListener('submit', searchPokemon)
};
init();
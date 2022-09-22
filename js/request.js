const catchPokemon = async id => {
    const baseURL = `https://pokeapi.co/api/v2/pokemon/`;
    const query = `${id}`
    const response = await fetch (baseURL + query);
    if (!response.ok) {
        idError()
    } else {
        const data = await response.json();
        return data
    }
    // console.log(data)
}


// Meter ese if fue la unica forma que encontre de hacer que se muestre el error cuando la ID no existe.

// const catchPokemon = async id => {
//     const baseURL = `https://pokeapi.co/api/v2/pokemon/`;
//     const query = `${id}`
//     const response = await fetch (baseURL + query)
//     const data = await response.json()
//     // console.log(data)
//     return data
// }
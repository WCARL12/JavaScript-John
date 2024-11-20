const userContainer = document.querySelector(".user-container");
const pokemonContainer = document.querySelector(".pokemon-container");

function displayUser(name, email, picture){
    const userName = document.createElement("h2");
    userName.classList.add("user-name")

    const userEmail = document.createElement("p");
    userEmail.classList.add("user-email")

    const userPicture = document.createElement("img");
    userPicture.classList.add("user-pic")

    userName.textContent = name;
    userEmail.textContent = email;
    userPicture.src = picture;

    userContainer.appendChild(userPicture);
    userContainer.appendChild(userName);
    userContainer.appendChild(userEmail);

    
}
function displayPokemon(name, type, picture){
    const pokemonName = document.createElement("h2");
    pokemonName.classList.add("pokemon-name")

    const pokemonType = document.createElement("p");
    pokemonType.classList.add("pokemon-type")

    const pokemonPicture = document.createElement("img");
    pokemonPicture.classList.add("pokemon-pic")

    pokemonName.textContent = name;
    pokemonType.textContent = type;
    pokemonPicture.src = picture;
    

    pokemonContainer.appendChild(pokemonName);
    pokemonContainer.appendChild(pokemonType);
    pokemonContainer.appendChild(pokemonPicture);

    
}

function fetchRandomUser(){
    
fetch("https://randomuser.me/api")
.then((response) => {
    
    return response.json()
})
.then((data) => {
        const userResults = data.results;
        // console.log(userResults[0]);
        
        userResults.forEach(user => {
            const name = `${user.name.first} ${user.name.last}`
            const email = user.email;
            const picture = user.picture.large;

            // console.log(name);
            // console.log(email);
            // console.log(picture);
            
            displayUser(name, email, picture)
            
        }) 
        
})
}

function fetchPokemon(){
    fetch("https://pokeapi.co/api/v2/pokemon/greninja")
    .then((response) => {
        return response.json()
    })
    .then((data) => {

        const pokemonResult = data;
        
        const pokemonName = pokemonResult.name;
        const pokemonType = pokemonResult.types[0].type.name + " type";
        const pokemonPicture = pokemonResult.sprites.back_default
        
        displayPokemon(pokemonName, pokemonType, pokemonPicture)
    })
}

fetchRandomUser()
fetchPokemon()
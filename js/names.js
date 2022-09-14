const autoComplete=document.getElementById("pokemons");

function traerNombres(){

for(let i=1;i<650;i++){
    let pokeNamesUrl=`https://pokeapi.co/api/v2/pokemon/${i}`
    fetch(pokeNamesUrl)
        .then(response=>response.json())
        .then(data=>{
                autoComplete.innerHTML+=`
                <option value="${data.name}"></option>
                `
            }
            );
    }

    
}

traerNombres();
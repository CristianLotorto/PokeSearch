const nameLabel=document.getElementById("name-label");
const nombre=document.getElementById("name");
const error=document.querySelector(".error");
const form=document.querySelector("form");
const boton=document.getElementById("getPokemon");
const container=document.querySelector(".container");

let value=nombre.value
// --------------------------------------------------------------


// --------------------------------------------------------------
const labelAnimation=()=>{


    nombre.addEventListener("focus", ()=>{

        nameLabel.style.transform="translateY(-31px)";
        nameLabel.style.transitionDuration="500ms";
    });
    
    nombre.addEventListener("blur", ()=>{
        value=nombre.value;
        if(value==""){
            
            nameLabel.style.transform="translateY(0px)";
            nameLabel.style.transitionDuration="500ms";
            error.innerHTML=`<p>*Debe Ingresar un Nombre o ID</p>`;

        }else{
            error.innerHTML="";
        }

    });

}

const cargaDatos=()=>{

form.onsubmit=(e)=>{
    e.preventDefault();
    // localStorage.setItem("Pokemon",JSON.stringify(value));
    // console.log(localStorage);
}
}

// const reset=()=>{
//     form.onreset=()=>{
//         localStorage.clear();
//         console.log(localStorage)
//     }
// }

labelAnimation();
cargaDatos();
// reset();




// ------------------------------------------------------------------



// if(isNaN(parseInt(dato))==true){
    //     nombre=dato;
    // }else{
        //     id=parseInt(dato);
        // }
        
const getPokemon=()=>{
value=nombre.value;

const pokeUrl=`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`
console.log(pokeUrl);
fetch(pokeUrl)
.then(response=>response.json())
.then(response=>{

let {sprites: {other:{dream_world:{front_default}}},id,name,weight,types:{0:{type:{name:typeName}}},abilities:{[0]:{ability:{name:abilityName}}},moves:{[0]:{move:{name:moveName}}}}=response;

name=name.replace(name.charAt(0),name.charAt(0).toUpperCase());
typeName=typeName.replace(typeName.charAt(0),typeName.charAt(0).toUpperCase());
abilityName=abilityName.replace(abilityName.charAt(0),abilityName.charAt(0).toUpperCase());
moveName=moveName.replace(moveName.charAt(0),moveName.charAt(0).toUpperCase());

if(typeName=="Fire"){
    
    container.style.backgroundColor="rgba(190, 80, 120,0.2)";
    
}else if(typeName=="Grass"){

    container.style.backgroundColor="rgba(99, 177, 31,0.2)";
    
}else if(typeName=="Water"){

    container.style.backgroundColor="rgba(23, 161, 236,0.2)";
    
}else if(typeName=="Bug"){

    container.style.backgroundColor="rgba(8, 99, 39,0.2)";
    
}else if(typeName=="Normal"){

    container.style.backgroundColor="rgba(239, 238, 241, 0.3)";
    
}else if(typeName=="Poison"){

    container.style.backgroundColor="rgba(197, 53, 216, 0.3)";
    
}else if(typeName=="Electric"){

    container.style.backgroundColor="rgba(229, 232, 63, 0.2)";
    
}else if(typeName=="Ground"){

    container.style.backgroundColor="rgba(88, 51, 8, 0.3)";
    
}else if(typeName=="Fairy"){

    container.style.backgroundColor="rgba(219, 169, 228, 0.3)";
    
}else if(typeName=="Fighting"){

    container.style.backgroundColor="rgba(10, 27, 208, 0.3)";
    
}else if(typeName=="Psychic"){

    container.style.backgroundColor="rgba(188, 230, 41, 0.4)";
    
}else if(typeName=="Rock"){

    container.style.backgroundColor="rgba(66, 89, 97, 0.4)";
    
}else if(typeName=="Ice"){

    container.style.backgroundColor="rgba(12, 8, 231, 0.4)";
    
}else if(typeName=="Steel"){

    container.style.backgroundColor="rgba(115, 114, 119, 0.6)";
    
}else if(typeName=="Dark"){

    container.style.backgroundColor="rgba(12, 12, 17, 0.2)";
    
}else if(typeName=="Ghost"){

    container.style.backgroundColor="rgba(88, 37, 176, 0.2)";
    
}

container.innerHTML=`

<img src="${front_default}">

<ul id="stats">

<li id="name"><h2>${name}</h2></li>
<li class="stat">ID: ${id}</li>
<li class="stat">Type: ${typeName}</li>
<li class="stat">Weight: ${weight*0.1} Kg.</li>
<li class="stat">Ability:</li>
<li class="stat">${abilityName}</li>
<li class="stat">${moveName}</li>

</ul>

`;

container.classList.remove("hidden");
})
.catch(error=>{alert(`Sorry =(. There's no pokemon with that name`)
    container.classList.add("hidden")
});

nombre.value="";
error.innerHTML="";

}

boton.addEventListener("click",getPokemon);
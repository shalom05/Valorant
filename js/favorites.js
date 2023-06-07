const searchTxt = document.getElementById("inputBuscar")
const containerAgents = document.getElementById("containerAgents")

var logedUserValorant = localStorage.getItem("logedUserValorant")
if (logedUserValorant === null) {
    alert("No hay usuario registrado")
    window.location.href = "../html/Log in.html";
}
var logedUserValorantJSON = JSON.parse(logedUserValorant)
console.log(logedUserValorantJSON)

async function pedirAPI() {
    const response = await fetch ("https://valorant-api.com/v1/agents")
    const json = await response.json()
    const data = json.data

    crearClase(data)
}



function crearClase(data) {
    var listAgents = []   
    for (let i = 0; i < data.length; i++) {
        if (i != 8 ) {
        const element = data[i]; 

        var newAgent = new Character (element.uuid, element.displayName, element.description, element.fullPortrait, element.displayIcon, element.role.displayName, element.role.displayIcon, element.abilities[0].displayName, element.abilities[0].description, element.abilities[0].displayIcon, element.abilities[1].displayName, element.abilities[1].description, element.abilities[1].displayIcon, element.abilities[2].displayName, element.abilities[2].description, element.abilities[2].displayIcon, element.abilities[3].displayName, element.abilities[3].description, element.abilities[3].displayIcon)
        listAgents.push(newAgent)
        }
    }
    createFavorites(logedUserValorantJSON.favorites, listAgents)
    window.listaAgentesGlobal = listAgents;
}



pedirAPI()

function buscar() {
    containerAgents.innerHTML = ""
    var textoABuscar = searchTxt.value.toLowerCase()
    console.log(textoABuscar)
    for (let i = 0; i < listaAgentesGlobal.length; i++) {
        const element = listaAgentesGlobal[i];
        console.log(element.name.toLowerCase())
        if (element.name.toLowerCase().includes(textoABuscar)) {
            containerAgents.innerHTML += element.toCards(i)
        }

    }
}

function enviarADetalle(uuid) {
    window.location.href = `../html/Agentsd.html?id=${uuid}`
}

function createFavorites(favoriteList, listAgents) {
    containerAgents.innerHTML = ""
    for (let i = 0; i < listAgents.length; i++) {
        const agent = listAgents[i];
        for (let i = 0; i < favoriteList.length; i++) {
            const favorite = favoriteList[i];
            if (favorite === agent.uuid) {
                containerAgents.innerHTML += agent.toCardsFavorite() 
            }  
        }
    }
}

function deleteFavorite(uuid) {
    var logedUserValorant = localStorage.getItem("logedUserValorant")
    var logedUserValorantJSON = JSON.parse(logedUserValorant)
    for (let i = 0; i < logedUserValorantJSON.favorites.length; i++) {
        var favoritesDelete = logedUserValorantJSON.favorites[i];
        if (favoritesDelete === uuid) {
            var favoriteToDelete = i
        }
    }
    logedUserValorantJSON.favorites.splice(favoriteToDelete, 1)
    var logedUserValorantSTRING = JSON.stringify(logedUserValorantJSON)
    localStorage.setItem("logedUserValorant", logedUserValorantSTRING)
    createFavorites(logedUserValorantJSON.favorites, listaAgentesGlobal)

    var usersData = localStorage.getItem("usersDataValorant")
    var usersDataJSON = JSON.parse(usersData)
    for (let i = 0; i < usersDataJSON.length; i++) {
        const element = usersDataJSON[i];
        if (element.email === logedUserValorantJSON.email) {
            usersDataJSON[i] = logedUserValorantJSON
            localStorage.setItem("usersData", usersDataJSON)
            console.log(usersDataJSON)
        }
    }
}

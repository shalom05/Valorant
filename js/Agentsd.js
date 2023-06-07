const params = new URLSearchParams(window.location.search)  //Se recoje la barra de busqueda que contiene el ID del personaje
var idAgent = params.get("id")    //Se pide que recoja la propiedad id del params

const titleAgent = document.getElementById("titleAgent")
const fullAgent = document.getElementById("fullAgent")
const abilitie1Text = document.getElementById("abilitie1Text")
const abilitie1Img = document.getElementById("abilitie1Img")
const abilitie2Text = document.getElementById("abilitie2Text")
const abilitie2Img = document.getElementById("abilitie2Img")
const abilitie3Text = document.getElementById("abilitie3Text")
const abilitie3Img = document.getElementById("abilitie3Img")
const abilitie4Text = document.getElementById("abilitie4Text")
const abilitie4Img = document.getElementById("abilitie4Img")


//Se hace la funcion para pedir la data especifica del personaje, es una funcion asincronica porque hay que esperar la data

async function pedirPersonaje(idAgent) { 
    const response = await fetch(`https://valorant-api.com/v1/agents/${idAgent}`) //Se pide la data, que aprovechando que es un link fijo y solo se cambia el nombre del personaje que estamos pidiendo, esta nos devuelve todo el json asociado al personaje
    const json = await response.json()  //Aqui se espera la respuesta del API
    const dataCampeon = json.data   //Como el json me trae informacion inncesesaria la depuro para que solo me traiga el data

    console.log(dataCampeon)

    //IMPORTANTE: Como el API me arroja la data es un objeto con los datos pero esta dentro de otro objeto con el nombre del personaje, asi que usamos dataCampeon[id] para acceder dentro del objeto y llegar a la data que necesitamos, importante que las [] se usen, de lo contrario estaria buscando una key string que no existe en este caso, porque estamos usando la id que tiene el nombre del personaje como una variable, los [] pueden recibir variables
    
    //Aqui ya se crea el objeto con la clase 
    var newAgent = new Character (dataCampeon.uuid, dataCampeon.displayName, dataCampeon.description, dataCampeon.fullPortrait, dataCampeon.displayIcon, dataCampeon.role.displayName, dataCampeon.role.displayIcon, dataCampeon.abilities[0].displayName, dataCampeon.abilities[0].description, dataCampeon.abilities[0].displayIcon, dataCampeon.abilities[1].displayName, dataCampeon.abilities[1].description, dataCampeon.abilities[1].displayIcon, dataCampeon.abilities[2].displayName, dataCampeon.abilities[2].description, dataCampeon.abilities[2].displayIcon, dataCampeon.abilities[3].displayName, dataCampeon.abilities[3].description, dataCampeon.abilities[3].displayIcon)
    console.log(newAgent)

    newAgent.changeInformation()
}

pedirPersonaje(idAgent)
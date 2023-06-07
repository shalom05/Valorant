var logedUserValorant = localStorage.getItem("logedUserValorant")
if (logedUserValorant === null) {
    alert("No hay usuario registrado")
    window.location.href = "../html/Log in.html";
}
var logedUserValorantJSON = JSON.parse(logedUserValorant)
console.log(logedUserValorantJSON)

const userID = document.getElementById("userIDName")
const nameE = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")

userID.innerHTML = logedUserValorantJSON.name
nameE.innerHTML = logedUserValorantJSON.name
email.innerHTML = logedUserValorantJSON.email
password.innerHTML = logedUserValorantJSON.password

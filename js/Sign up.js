const form = document.querySelector('.loginc');
const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');

form.addEventListener('submit', (e) => {

  var usersData = localStorage.getItem("usersDataValorant")
  var usersDataJSON = JSON.parse(usersData)

  e.preventDefault();
  const name = form.querySelector('.input-n');
  const email = form.querySelector('.input-e');

  if (!name.value) {
    alert('Porfavor ingrese su nombre.');
    name.focus();
  } else if (!email.value) {
    alert('Porfavor ingrese su email.');
    email.focus();
  } else if (!isValidEmail(email.value)) {
    alert('Porfavor ingrese un email valido.');
    email.focus();
  } else if (!password1.value || !password2.value) {
    alert('Porfavor ingrese la contraseña en los 2 campos.');
    password1.focus();
  } else if (password1.value !== password2.value) {
    alert('La contraseña no coincide.');
    password2.focus();
  } else if (!isValidPassword(password1.value)) {
    alert('La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula, una letra minúscula y un número.');
    password1.focus();
  } else {
    if (usersData === null) {
      console.log("Entro a la condicion de data null")
      usersDataJSON = []
      var newUser = {
				email: email.value,
				password: password1.value,
				name: name.value,
        favorites: [
				]
			}

      console.log(newUser)

      usersDataJSON.push(newUser)
      var usersDataString = JSON.stringify(usersDataJSON)
      localStorage.setItem("usersDataValorant", usersDataString)
      var newUserString = JSON.stringify(newUser)
      localStorage.setItem("logedUserValorant", newUserString)
      alert('Registro exitoso!');
      window.location.href = "../html/Agent.html";
    } else {
      console.log("entro a la condicion de si hay data")
      for (let i = 0; i < usersDataJSON.length; i++) {
        var user = usersDataJSON[i];
        console.log(user)
        
        if (user.email === email.value) {
          return alert("El correo ya esta registrado")
        }
      }

      console.log("El correo no estaba registrado<")
      var newUser = {
				email: email.value,
				password: password1.value,
				name: name.value,
        favorites: [
				]
			}

      console.log(newUser)

      usersDataJSON.push(newUser)
      console.log(usersDataJSON)
      var usersDataString = JSON.stringify(usersDataJSON)
      localStorage.setItem("usersDataValorant", usersDataString)
      var newUserString = JSON.stringify(newUser)
      localStorage.setItem("logedUserValorant", newUserString)
      alert('Registro exitoso!');
      window.location.href = "../html/Agent.html";

    }
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return passwordRegex.test(password);
}

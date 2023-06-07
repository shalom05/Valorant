  const form = document.getElementById('form');
  const email = document.getElementById('email');
  const password = document.getElementById('password');


  form.addEventListener('submit', function(event) {

    event.preventDefault();

    var usersData = localStorage.getItem("usersDataValorant")
    var usersDataJSON = JSON.parse(usersData)

      if (!email.value) {
      alert('Por favor, ingresa tu email.');
      return;
    }

    if (!password.value) {
      alert('Por favor, ingresa tu contraseña.');
      return;
    }

    document.getElementById("form").addEventListener("submit", function(event) {
      event.preventDefault();

      for (let i = 0; i < usersDataJSON.length; i++) {
        const user = usersDataJSON[i];

        if (user.email === email.value) {
          var foundUSer = user
          break
        }
        return alert("El usuario no esta registrado")
      }

      if  (foundUSer.password === password.value) {
        var foundUSerString = JSON.stringify(foundUSer)
        localStorage.setItem("logedUserValorant", foundUSerString)
        window.location.href = "../html/Agent.html";
      }
      

      
    });
  });


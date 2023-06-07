const editProfileForm = document.querySelector('#edit-profile-form');
const usernameField = document.querySelector('#nombre');
const emailField = document.querySelector('#email');
const phoneField = document.querySelector('#phone');
const passwordField = document.querySelector('#password');
const confirmPasswordField = document.querySelector('#confirm-password');
const cancelButton = document.querySelector('.cancelar');

cancelButton.addEventListener('click', () => {
  window.location.href = '../html/profile.html';
});

editProfileForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!usernameField.value) {
    alert('Por favor, ingrese su nombre de usuario.');
    usernameField.focus();
    return;
  }

  if (!emailField.value) {
    alert('Por favor, ingrese su correo electrónico.');
    emailField.focus();
    return;
  }

  if (!isValidEmail(emailField.value)) {
    alert('Por favor, ingrese un correo electrónico válido.');
    emailField.focus();
    return;
  }

  if (!phoneField.value) {
    alert('Por favor, ingrese su número de teléfono.');
    phoneField.focus();
    return;
  }

  if (!isValidPhone(phoneField.value)) {
    alert('Por favor, ingrese un número de teléfono válido.');
    phoneField.focus();
    return;
  }

  if (passwordField.value || confirmPasswordField.value) {
    if (passwordField.value !== confirmPasswordField.value) {
      alert('Las contraseñas no coinciden.');
      passwordField.focus();
      return;
    }

    if (!isValidPassword(passwordField.value)) {
      alert('La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula, una letra minúscula y un número.');
      passwordField.focus();
      return;
    }
  }

  window.location.href = '../html/profile.html';

});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

function isValidPassword(password) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return passwordRegex.test(password);
}

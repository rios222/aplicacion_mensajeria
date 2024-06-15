// frontend/scripts/auth.js

// Lógica para manejar la autenticación de usuarios.
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Iniciando sesión con', { username, password });


});

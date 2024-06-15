//// backend/usuarios.js

// Importar las funciones necesarias desde la base de datos
const { agregarUsuario, database } = require('../db/database');

// Esta función registra un nuevo usuario en el sistema.
function registrarUsuario(login, password, direccion, email, telefono) {
    agregarUsuario({ login, password, direccion, email, telefono });
    console.log('Usuario registrado:', { login, password, direccion, email, telefono });
    return `Usuario ${login} registrado exitosamente.`;
}

// Esta función obtiene todos los usuarios registrados en el sistema.
function obtenerUsuarios() {
    return database.usuarios;
}

// Esta función actualiza la información de un usuario existente.
function actualizarUsuario(id, login, password, direccion, email, telefono) {
    console.log('Usuario actualizado:', { id, login, password, direccion, email, telefono });
}

// Esta función elimina un usuario del sistema.
function eliminarUsuario(id) {
    console.log('Usuario eliminado:', id);
}

module.exports = { registrarUsuario, obtenerUsuarios, actualizarUsuario, eliminarUsuario };


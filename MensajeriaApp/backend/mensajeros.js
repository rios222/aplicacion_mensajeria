// backend/mensajeros.js

const { agregarMensajero, database } = require('../db/database');

// Función para registrar un nuevo mensajero
function registrarMensajero(mensajero) {
    agregarMensajero(mensajero);
    return `Mensajero ${mensajero.nombre} registrado exitosamente.`;
}

// Función para obtener todos los mensajeros
function obtenerMensajeros() {
    return database.mensajeros;
}

// Exportar funciones
module.exports = {
    registrarMensajero,
    obtenerMensajeros
};

// Esta función registra un nuevo mensajero en el sistema.
function registrarMensajero(identificacion, nombre, direccion, email, telefono) {
    
    console.log('Mensajero registrado:', { identificacion, nombre, direccion, email, telefono });
}

// Esta función actualiza la información de un mensajero existente.
function actualizarMensajero(id, identificacion, nombre, direccion, email, telefono) {
   
    console.log('Mensajero actualizado:', { id, identificacion, nombre, direccion, email, telefono });
}

// Esta función elimina un mensajero del sistema.
function eliminarMensajero(id) {
    
    console.log('Mensajero eliminado:', id);
}

module.exports = { registrarMensajero, actualizarMensajero, eliminarMensajero };

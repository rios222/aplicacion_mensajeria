// backend/pedidos.js

const { agregarPedido, database } = require('../db/database');

// Función para crear un nuevo pedido
function crearPedido(pedido) {
    agregarPedido(pedido);
    return `Pedido ${pedido.codigo} creado exitosamente.`;
}

// Función para obtener todos los pedidos
function obtenerPedidos() {
    return database.pedidos;
}

// Esta función registra un nuevo pedido en el sistema.
function registrarPedido(origen, destino, ciudad, descripcion, tipoTransporte, numPaquetes) {
   
    console.log('Pedido registrado:', { origen, destino, ciudad, descripcion, tipoTransporte, numPaquetes });
}

// Esta función actualiza el estado de un pedido.
function actualizarEstadoPedido(id, estado, fechaHora, foto) {
  
    console.log('Estado del pedido actualizado:', { id, estado, fechaHora, foto });
}

// Esta función elimina un pedido del sistema.
function eliminarPedido(id) {
    
    console.log('Pedido eliminado:', id);
}

// Exportar todas las funciones
module.exports = {
    crearPedido,
    obtenerPedidos,
    registrarPedido,
    actualizarEstadoPedido,
    eliminarPedido
};

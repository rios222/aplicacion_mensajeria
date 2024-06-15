const { ipcRenderer } = require('electron');

// Función para registrar un nuevo cliente desde el frontend al backend
async function registrarCliente(nit, nombre, direccion, ciudad, email, telefono) {
    try {
        const response = await fetch('/registrar-cliente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nit, nombre, direccion, ciudad, email, telefono })
        });

        const data = await response.text();
        return data; // Puedes ajustar lo que deseas devolver según la respuesta del backend
    } catch (error) {
        console.error('Error al registrar cliente:', error);
        throw error;
    }
}

// Evento para registrar un pedido desde el proceso principal
ipcRenderer.on('registrarPedido', async (event, pedido) => {
    try {
        // Llamar a la función para registrar el pedido en el backend
        const resultado = await registrarPedido(pedido);
        console.log('Pedido registrado:', resultado);
        // Aquí puedes enviar una confirmación al proceso principal si es necesario
    } catch (error) {
        console.error('Error al registrar pedido:', error);
        // Manejar errores aquí si es necesario
    }
});

// Evento para registrar un cliente desde el proceso principal
ipcRenderer.on('registrarCliente', async (event, cliente) => {
    try {
        // Llamar a la función para registrar el cliente en el backend
        const resultado = await registrarCliente(cliente.nit, cliente.nombre, cliente.direccion, cliente.ciudad, cliente.email, cliente.telefono);
        console.log('Cliente registrado:', resultado);

        // Emitir evento de confirmación al proceso principal si es necesario
        ipcRenderer.send('clienteRegistrado', resultado);
    } catch (error) {
        console.error('Error al registrar cliente:', error);
        // Manejar errores aquí si es necesario
    }
});

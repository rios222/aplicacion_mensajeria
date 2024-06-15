// Función para mostrar la gestión de clientes
function mostrarClientes() {
    const section = document.createElement('section');
    section.innerHTML = `
        <h2>Gestionar Clientes</h2>
        <form id="formCliente">
            <label for="nombreCliente">Nombre:</label>
            <input type="text" id="nombreCliente" required>
            <label for="direccionCliente">Dirección:</label>
            <input type="text" id="direccionCliente" required>
            <label for="ciudadCliente">Ciudad:</label>
            <input type="text" id="ciudadCliente" required>
            <label for="emailCliente">Email:</label>
            <input type="email" id="emailCliente" required>
            <label for="telefonoCliente">Teléfono:</label>
            <input type="tel" id="telefonoCliente" required>
            <button type="submit">Registrar Cliente</button>
        </form>
        <h3>Clientes Registrados</h3>
        <ul id="listadoClientes"></ul>
    `;
    document.body.appendChild(section);

    document.getElementById('formCliente').addEventListener('submit', function(event) {
        event.preventDefault();
        const cliente = {
            nombre: document.getElementById('nombreCliente').value,
            direccion: document.getElementById('direccionCliente').value,
            ciudad: document.getElementById('ciudadCliente').value,
            email: document.getElementById('emailCliente').value,
            telefono: document.getElementById('telefonoCliente').value
        };
        // Llamada a la función del backend para registrar el cliente
        console.log('Cliente registrado:', cliente);
        // Actualizar la lista de clientes
        const listItem = document.createElement('li');
        listItem.textContent = `${cliente.nombre} - ${cliente.email}`;
        document.getElementById('listadoClientes').appendChild(listItem);
    });
}

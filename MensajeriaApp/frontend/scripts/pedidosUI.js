// Función para mostrar la gestión de pedids
function mostrarPedidos() {
    const section = document.createElement('section');
    section.innerHTML = `
        <h2>Gestionar Pedidos</h2>
        <form id="formPedido">
            <label for="origen">Origen:</label>
            <input type="text" id="origen" required>
            <label for="destino">Destino:</label>
            <input type="text" id="destino" required>
            <label for="descripcion">Descripción:</label>
            <textarea id="descripcion" rows="4" required></textarea>
            <label for="tipoTransporte">Tipo de Transporte:</label>
            <select id="tipoTransporte" required>
                <option value="moto">Moto</option>
                <option value="carro">Carro</option>
                <option value="camion">Camión</option>
            </select>
            <label for="numPaquetes">Número de Paquetes:</label>
            <input type="number" id="numPaquetes" min="1" required>
            <button type="submit">Crear Pedido</button>
        </form>
        <h3>Pedidos Registrados</h3>
        <ul id="listadoPedidos"></ul>
    `;
    document.body.appendChild(section);

    document.getElementById('formPedido').addEventListener('submit', function(event) {
        event.preventDefault();
        const pedido = {
            codigo: generarCodigoPedido(),
            origen: document.getElementById('origen').value,
            destino: document.getElementById('destino').value,
            descripcion: document.getElementById('descripcion').value,
            tipoTransporte: document.getElementById('tipoTransporte').value,
            numPaquetes: parseInt(document.getElementById('numPaquetes').value)
        };
        // Llamada a la función del backend para crear el pedido
        console.log('Pedido creado:', pedido);
        // Actualizar la lista de pedidos
        const listItem = document.createElement('li');
        listItem.textContent = `Pedido ${pedido.codigo} - ${pedido.descripcion}`;
        document.getElementById('listadoPedidos').appendChild(listItem);
    });

    // Función para generar un código de pedido 
    function generarCodigoPedido() {
        return Math.random().toString(36).substring(2, 10).toUpperCase();
    }
}


// Función para enviar un pedido al backend
function enviarPedido(pedido) {
    fetch('/api/pedidos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pedido),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        // Actualizar la interfaz o mostrar mensaje de éxito
    })
    .catch(error => {
        console.error('Error al enviar pedido:', error);
        // Mostrar mensaje de error en la interfaz
    });
}

// Función para obtener todos los pedidos desde el backend
function obtenerTodosPedidos() {
    fetch('/api/pedidos')
    .then(response => response.json())
    .then(data => {
        console.log('Pedidos obtenidos:', data);
        // Mostrar los pedidos en la interfaz
    })
    .catch(error => {
        console.error('Error al obtener pedidos:', error);
        // Mostrar mensaje de error en la interfaz
    });
}

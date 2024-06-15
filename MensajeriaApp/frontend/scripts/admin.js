


// Función para mostrar el módulo de administración y generar reportes
function mostrarReportes() {
    const section = document.createElement('section');
    section.innerHTML = `
        <h2>Módulo de Administración</h2>
        <button id="reportePedidosCliente">Generar Reporte de Pedidos por Cliente</button>
        <button id="reportePedidosMensajero">Generar Reporte de Pedidos por Mensajero</button>
    `;
    document.body.appendChild(section);

    // Evento para generar reporte de pedidos por cliente
    document.getElementById('reportePedidosCliente').addEventListener('click', function() {
        // Lógica para generar y descargar el reporte PDF de pedidos por cliente
        alert('Generando reporte de pedidos por cliente en formato PDF.');
    });

    // Evento para generar reporte de pedidos por mensajero
    document.getElementById('reportePedidosMensajero').addEventListener('click', function() {
        // Lógica para generar y descargar el reporte PDF de pedidos por mensajero
        alert('Generando reporte de pedidos por mensajero en formato PDF.');
    });
}

const express = require('express');
const bodyParser = require('body-parser');
const { registrarPedido, actualizarEstadoPedido, eliminarPedido } = require('./MensajeriaApp/backend/pedidos');
const { registrarCliente, actualizarCliente, eliminarCliente } = require('./MensajeriaApp/backend/clientes'); // Importar funciones de clientes.js
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/registrar-pedido', (req, res) => {
    const { origen, destino, ciudad, descripcion, tipoTransporte, numPaquetes } = req.body;
    registrarPedido(origen, destino, ciudad, descripcion, tipoTransporte, numPaquetes);
    res.send('Pedido registrado exitosamente');
});

app.put('/actualizar-estado/:id', (req, res) => {
    const { id } = req.params;
    const { estado, fechaHora, foto } = req.body;
    actualizarEstadoPedido(id, estado, fechaHora, foto);
    res.send(`Estado del pedido ${id} actualizado`);
});

app.delete('/eliminar-pedido/:id', (req, res) => {
    const { id } = req.params;
    eliminarPedido(id);
    res.send(`Pedido ${id} eliminado`);
});
// Rutas para gestionar clientes
app.post('/registrar-cliente', async (req, res) => {
    const { nit, nombre, direccion, ciudad, email, telefono } = req.body;
    try {
        await registrarCliente(nit, nombre, direccion, ciudad, email, telefono);
        res.send('Cliente registrado exitosamente');
    } catch (error) {
        console.error('Error al registrar cliente:', error);
        res.status(500).send('Error al registrar cliente');
    }
});

app.put('/actualizar-cliente/:id', async (req, res) => {
    const { id } = req.params;
    const { nit, nombre, direccion, ciudad, email, telefono } = req.body;
    try {
        await actualizarCliente(id, nit, nombre, direccion, ciudad, email, telefono);
        res.send(`Cliente ${id} actualizado`);
    } catch (error) {
        console.error(`Error al actualizar cliente ${id}:`, error);
        res.status(500).send(`Error al actualizar cliente ${id}`);
    }
});

app.delete('/eliminar-cliente/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await eliminarCliente(id);
        res.send(`Cliente ${id} eliminado`);
    } catch (error) {
        console.error(`Error al eliminar cliente ${id}:`, error);
        res.status(500).send(`Error al eliminar cliente ${id}`);
    }
});

// Ruta de prueba para verificar que el servidor está funcionando
app.get('/', (req, res) => {
    res.send('¡Servidor de mensajería funcionando correctamente!');
});

// Iniciar el servidor y ponerlo a escuchar en un puerto específico
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en puerto ${PORT}`);
});

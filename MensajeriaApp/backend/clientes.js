// Importar el cliente de PostgreSQL
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'proyectobd',
    password: 'tchiqui10',
    port: 5432, 
});

// Esta función registra un nuevo cliente en la base de datos.
async function registrarCliente(nit, nombre, direccion, ciudad, email, telefono) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const queryText = 'INSERT INTO clientes (nit, nombre, direccion, ciudad, email, telefono) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id';
        const values = [nit, nombre, direccion, ciudad, email, telefono];
        const res = await client.query(queryText, values);
        await client.query('COMMIT');
        console.log('Cliente registrado con ID:', res.rows[0].id);
        return res.rows[0].id;
    } catch (e) {
        await client.query('ROLLBACK');
        throw e;
    } finally {
        client.release();
    }
}

// Esta función actualiza la información de un cliente existente
async function actualizarCliente(id, nit, nombre, direccion, ciudad, email, telefono) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const queryText = 'UPDATE clientes SET nit = $1, nombre = $2, direccion = $3, ciudad = $4, email = $5, telefono = $6 WHERE id = $7';
        const values = [nit, nombre, direccion, ciudad, email, telefono, id];
        await client.query(queryText, values);
        await client.query('COMMIT');
        console.log('Cliente actualizado con ID:', id);
    } catch (e) {
        await client.query('ROLLBACK');
        throw e;
    } finally {
        client.release();
    }
}

// Esta función elimina un cliente del sistema
async function eliminarCliente(id) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const queryText = 'DELETE FROM clientes WHERE id = $1';
        const values = [id];
        await client.query(queryText, values);
        await client.query('COMMIT');
        console.log('Cliente eliminado con ID:', id);
    } catch (e) {
        await client.query('ROLLBACK');
        throw e;
    } finally {
        client.release();
    }
}

module.exports = { registrarCliente, actualizarCliente, eliminarCliente };

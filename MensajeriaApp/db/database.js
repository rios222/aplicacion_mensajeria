

// se conecta a la base de datps
const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'proyectobd',
    password: 'chiqui10',
    port: 5432,
});

client.connect()
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.error('Error conectando a la base de datos', err));

module.exports = client;

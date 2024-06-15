
CREATE TABLE clientes (
    nit VARCHAR(20) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(100),
    ciudad VARCHAR(50),
    email VARCHAR(100),
    telefono VARCHAR(20)
);

CREATE TABLE sucursales (
    id SERIAL PRIMARY KEY,
    cliente_nit VARCHAR(20) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(100),
    telefono VARCHAR(20),
    FOREIGN KEY (cliente_nit) REFERENCES clientes(nit)
);

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    login VARCHAR(50) NOT NULL,
    contrasena VARCHAR(50) NOT NULL,
    direccion VARCHAR(100),
    email VARCHAR(100),
    telefono VARCHAR(20),
    cliente_nit VARCHAR(20),
    FOREIGN KEY (cliente_nit) REFERENCES clientes(nit)
);

CREATE TABLE mensajeros (
    id SERIAL PRIMARY KEY,
    identificacion VARCHAR(20) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(100),
    email VARCHAR(100),
    telefono VARCHAR(20)
);

CREATE TABLE pedidos (
    codigo VARCHAR(10) PRIMARY KEY,
    cliente_nit VARCHAR(20) NOT NULL,
    mensajero_id INTEGER,
    fecha_solicitud TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    origen VARCHAR(100) NOT NULL,
    destino VARCHAR(100) NOT NULL,
    ciudad VARCHAR(50) NOT NULL,
    descripcion TEXT,
    tipo_transporte VARCHAR(20),
    num_paquetes INTEGER,
    estado VARCHAR(20) DEFAULT 'Solicitado',
    fecha_recogida TIMESTAMP,
    fecha_entrega TIMESTAMP,
    FOREIGN KEY (cliente_nit) REFERENCES clientes(nit),
    FOREIGN KEY (mensajero_id) REFERENCES mensajeros(id)
);

CREATE TABLE estados_pedido (
    pedido_codigo VARCHAR(10),
    estado VARCHAR(20),
    fecha_estado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (pedido_codigo) REFERENCES pedidos(codigo)
);

CREATE TABLE fotos_pedido (
    pedido_codigo VARCHAR(10),
    url VARCHAR(255),
    descripcion TEXT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (pedido_codigo) REFERENCES pedidos(codigo)
);

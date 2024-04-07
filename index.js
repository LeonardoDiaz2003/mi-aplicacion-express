const express = require('express');
const app = express();

const clientes = [
    { id: 1, nombre: 'Cliente 1' },
    { id: 2, nombre: 'Cliente 2' },
    { id: 3, nombre: 'Cliente 3' }
];

const productos = [
    { id: 1, nombre: 'Producto 1' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' }
];

app.get('/', (req, res) => {
    res.send('Bienvenido a la página principal');
});

app.get('/clientes', (req, res) => {
    res.json(clientes);
});

app.get('/productos', (req, res) => {
    res.json(productos);
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Servidor Express corriendo en el puerto ${port}`);
});
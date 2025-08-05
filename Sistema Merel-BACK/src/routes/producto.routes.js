const express = require('express');
const router = express.Router();
const producto = require('../controllers/producto.controller');
const { isAuthenticated } = require('../middleware/session.middleware');

router.get('/', isAuthenticated, producto.getAll); // protegida

module.exports = router;

// (lo tuyo)
/*const express = require('express');
const router = express.Router();
const pool = require('../db/connection');

// Obtener todos los productos
router.get('/', async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM productos');
      res.json(rows);
    } catch (error) {
      console.error('❌ Error al obtener productos:', error.message);
      res.status(500).json({ error: 'Error en el servidor', detalle: error.message });
    }
  });
  // Crear nuevo producto
router.post('/', async (req, res) => {
    const { nombre, descripcion, precio, stock } = req.body;
  
    // Validación básica
    if (!nombre || !precio || stock == null) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }
  
    try {
      const [result] = await pool.query(
        'INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)',
        [nombre, descripcion, precio, stock]
      );
  
      res.status(201).json({ message: 'Producto creado', id: result.insertId });
    } catch (error) {
      console.error('❌ Error al crear producto:', error.message);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  });
  

module.exports = router;*/

const express = require('express');
const router = express.Router();
const pool = require('../db/connection');

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ? AND password = ?', [email, password]);

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const user = rows[0];
    res.json({ id: user.id, email: user.email, nombre: user.nombre });
  } catch (err) {
    console.error('Error al iniciar sesión:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;

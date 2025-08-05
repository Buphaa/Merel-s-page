const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller');

router.post('/login', auth.login);
router.get('/logout', auth.logout);
router.get('/me', auth.getUser);

module.exports = router;

// (lo tuyo)
/*const express = require('express');
const router = express.Router();
const pool = require('../config/database');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ? AND password = ?', [email, password]);

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    const user = rows[0];
    res.json({ message: 'Login exitoso', usuario: { id: user.id, nombre: user.nombre, email: user.email } });
  } catch (error) {
    console.error('❌ Error en login:', error.message);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

module.exports = router;*/

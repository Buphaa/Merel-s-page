const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {
  const { email, contrasena } = req.body;

  const user = await Usuario.findOne({ where: { email } });
  if (!user) return res.status(401).json({ error: 'Usuario no encontrado' });

  const valido = bcrypt.compareSync(contrasena, user.contrasena);
  if (!valido) return res.status(401).json({ error: 'Contraseña incorrecta' });

  req.session.userId = user.idUsuario;
  res.status(200).json({ message: 'Login exitoso' });
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.json({ message: 'Sesión cerrada' });
  });
};

exports.getUser = async (req, res) => {
  if (!req.session.userId) return res.status(401).json({ error: 'No autenticado' });

  const user = await Usuario.findByPk(req.session.userId);
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

  res.json({ email: user.email });
};
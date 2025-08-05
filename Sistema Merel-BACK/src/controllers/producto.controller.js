const Producto = require('../models/producto');

exports.getAll = async (_req, res) => {
  const productos = await Producto.findAll();
  res.json(productos);
};
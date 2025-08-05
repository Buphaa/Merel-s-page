const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const authRoutes = require('./routes/auth.routes');
const productoRoutes = require('./routes/producto.routes');
const sequelize = require('./config/database');

const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(bodyParser.json());

app.use(session({
  secret: 'clave-secreta-merel',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // secure: true si usás https
}));

app.use('/api/auth', authRoutes);
app.use('/api/productos', productoRoutes);

sequelize.authenticate()
  .then(() => console.log('Base de datos conectada'))
  .catch(err => console.error('Error:', err));

sequelize.sync().then(() => console.log('Modelos sincronizados'));

module.exports = app;

// (lo tuyo)
/*const express = require('express');
const app = express();
const productosRouter = require('./routes/productos'); // 👈 esta línea es clave
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use('/api/productos', productosRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ SistemaMerel corriendo en http://localhost:${PORT}`);
});

const authRouter = require('./routes/auth');
app.use('/api', authRouter);

const loginRoutes = require('./routes/login');
app.use('/api/login', loginRoutes);*/

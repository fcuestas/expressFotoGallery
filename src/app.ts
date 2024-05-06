import express, {urlencoded} from 'express';
import fs from 'fs';
import path from 'path';

import { rutas } from "./utils/rutas.js";
import { loggerin } from './utils/loggerin.utils.js';
import { photocallRouter } from './routes/photocall.routes.js';

const app = express();
const PORT = 3000;

app.use(urlencoded({extended: false}));  //urlencoded pertenece a body-parser
// Establece el motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', rutas.views);
app.use(express.static((rutas.public)));
loggerin("Rutas cargadas: "+rutas);
app.use('/photocall', photocallRouter);
app.get('/',(req, res) => {res.render('index', { title: 'Home', path: '/home'})});

app.listen(PORT, () => {
  loggerin(`Servidor Express escuchando en el puerto ${PORT}`);
  loggerin(`Servidor Express en funcionamiento: http://localhost:${PORT}`,'app.js');
});

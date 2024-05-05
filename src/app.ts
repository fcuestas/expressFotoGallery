import express, {urlencoded} from 'express';
import fs from 'fs';
import path from 'path';
import { rutas } from "./utils/rutas.js";

const app = express();
const PORT = 3000;

app.use(urlencoded({extended: false}));  //urlencoded pertenece a body-parser
// Establece el motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', rutas.views);
app.use(express.static((rutas.public)));
console.log(rutas);
app.get('/', (req, res) => {
  const folderPath = rutas.fotos; // Reemplaza con la ruta real de tu carpeta
  const files = fs.readdirSync(folderPath);
  const jpegFiles = files.filter(file => path.extname(file) === '.jpg');
  const imagePaths = jpegFiles.map(file => file);//path.join(folderPath, file));
  console.log(imagePaths);
  res.render('index', { imagePaths });
});

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

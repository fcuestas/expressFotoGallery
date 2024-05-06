import { Request, Response, NextFunction } from "express";
import fs  from "fs";
import path from "path";

import { rutas } from "../utils/rutas.js";
import { loggerin } from "../utils/loggerin.utils.js";


export const getPhotocall =  (req: Request, res: Response) => {
    const folderPath = rutas.fotos; // Reemplaza con la ruta real de tu carpeta
    const files = fs.readdirSync(folderPath);
    const jpegFiles = files.filter(file => path.extname(file) === '.jpg');
    const imagePaths = jpegFiles.map(file => file);//path.join(folderPath, file));
    loggerin('imagePaths: '+imagePaths);
    res.render('photocall', { title: 'Photocall', path: '/photocall', imagePaths: imagePaths });
  };
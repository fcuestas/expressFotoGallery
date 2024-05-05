//Fichero creado para manejar las rutas absolutas hasta los recursos de la app
import { resolve, sep, dirname, join} from "path";
import { fileURLToPath } from "url";

//Mediante las librerías nos aseguramos de que la ruta se construye correctqamente independientemente del SO donde se ejecute.
const base: string = dirname(fileURLToPath(import.meta.url));
export const rutas = {
    base: join(base,'..'),
    views: join(base,'..','views'),
    public: join(base,'..','assets'),
    fotos: join(base,'..','assets/fotos'),
    data: join(base,'..','data'),
    cart: join(base,'..','data'),
}
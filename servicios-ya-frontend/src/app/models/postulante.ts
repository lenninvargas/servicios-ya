import { Empleo } from "./empleo";
import { Usuario } from "./usuario";

export interface Postulante {
    id: {
        idEmpleo: number;
        idUsuario: number;
    };
    idEmpleo: Empleo[];
    idUsuario: Usuario;
    estado: boolean;
    precioPropuesta: number;
    fecha: string;
}

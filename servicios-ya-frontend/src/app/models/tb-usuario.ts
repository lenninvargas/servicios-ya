import { Pais } from "./Pais";

export interface TbUsuario {
    id?: number;
    nombre: string;
    apellidoPat: string;
    apellidoMat: string;
    fechaNac: string;
    dni: string;
    pais: Pais;
    email: string;
    password: string;
    tipoUsuario: string;
}

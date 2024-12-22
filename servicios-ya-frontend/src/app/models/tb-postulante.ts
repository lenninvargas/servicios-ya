import { TbEmpleo } from "./tb-empleo";
import { TbUsuario } from "./tb-usuario";

export interface TbPostulante {
    id: {
        idEmpleo: number;
        idUsuario: number;
    };
    idEmpleo: TbEmpleo[];
    idUsuario: TbUsuario;
    estado: boolean;
    precioPropuesta: number;
    fecha: string;
}

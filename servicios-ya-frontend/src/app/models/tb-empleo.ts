import { Habilidad } from "./Habilidad";
import { TbUsuario } from "./tb-usuario";

export interface TbEmpleo {
    id: number;
        titulo: string;
        descripcion: string;
        fechaPublicada: string;
        presupuesto: number;
        usuario: TbUsuario;
        habilidad: Habilidad;
}

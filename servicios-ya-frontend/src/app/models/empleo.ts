import { Habilidad } from "./Habilidad";
import { Usuario } from "./usuario";

export interface Empleo {
  id:number;
  titulo:string;
  descripcion:string;
  fechaPublicada:Date | string;
  presupuesto: number;
  usuario: Usuario;
  habilidad: Habilidad;
}

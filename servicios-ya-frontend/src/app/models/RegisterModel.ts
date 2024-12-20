import { Pais } from './Pais';

export interface RegisterModel {
  nombre: string;
  apellidoPat: string;
  apellidoMat: string;
  fechaNac: string;
  dni: string;
  pais: { id: number };
  email: string;
  password: string;
  habilidades: string[];
  tipoUsuario: string;
  calificacion: number;  
}

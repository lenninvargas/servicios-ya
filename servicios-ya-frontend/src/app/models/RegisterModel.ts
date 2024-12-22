
export interface RegisterModel {
  nombre: string;
  apellidoPat: string;
  apellidoMat: string;
  fechaNac: string;
  dni: string;
  pais: { id: number };
  email: string;
  password: string;
  habilidades: { id: number }[];
  tipoUsuario: string;
  calificacion: number;
}

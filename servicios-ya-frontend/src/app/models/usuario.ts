export interface Usuario {
  id:number;
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

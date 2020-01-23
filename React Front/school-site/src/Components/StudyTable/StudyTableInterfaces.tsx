export interface IAlumno {
    [nombre:string]: string;
    apeidoPaterno: string;
    apeidoMaterno: string;
    edad: string;
    carrera: string;
    totalMateriasCarrera: string;
  }

export interface IMaterias {
  nombre: string;
  calificacion: number;
}
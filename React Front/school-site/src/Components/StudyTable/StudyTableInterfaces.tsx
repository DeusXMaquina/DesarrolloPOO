export interface IAlumno {
    [nombre:string]: string;
    apeidoPaterno: string;
    apeidoMaterno: string;
    edad: string;
    carrera: string;
    materias: string;
  }

export interface IMaterias {
  nombreMateria: string;
  calificacion: number;
}
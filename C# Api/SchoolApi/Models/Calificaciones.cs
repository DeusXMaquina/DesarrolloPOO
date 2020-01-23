using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SchoolApi.Models
{
    public class Calificaciones
    {
        public int Id { get; set; } = 0;
        public int idAlumno { get; set; } = 0;
        public int idMateria { get; set; } = 0;
        public int calificacion { get; set; } = 0;
    }
}
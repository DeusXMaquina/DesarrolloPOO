using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SchoolApi.Models
{
    public class Alumnos
    {
        public int Id { get; set; } = 0;
        public int idCarrera { get; set; } = 0;
        public string nombreAlumno { get; set; } = "";
        public string apeidoPaterno { get; set; } = "";
        public string apeidoMaterno { get; set; } = "";
        public string edad { get; set; } = "";
    }
}
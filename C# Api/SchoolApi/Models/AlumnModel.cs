using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SchoolApi.Models
{
    public class AlumnModel
    {
        public int Id { get; set; }
        public string nombre { get; set; }
        public string apeidoPaterno { get; set; }
        public string apeidoMaterno { get; set; }
        public string edad { get; set; }
        public string carrera { get; set; }
        public int materias { get; set; }


    }
}
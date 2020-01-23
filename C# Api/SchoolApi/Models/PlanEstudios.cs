using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SchoolApi.Models
{
    public class PlanEstudios
    {
        public int Id { get; set; } = 0;
        public int idCarrera { get; set; } = 0;
        public int idMateria { get; set; } = 0;
    }
}
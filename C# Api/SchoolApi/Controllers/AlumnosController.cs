using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SchoolApi.Models;

namespace SchoolApi.Controllers
{
    public class AlumnosController : ApiController
    {
        List<Alumnos> alumno = new List<Alumnos>();

        public AlumnosController()
        {
            alumno.Add(new Alumnos { Id = 1, idCarrera = 6, nombreAlumno = "Pablo", apeidoPaterno ="Altamirano", apeidoMaterno="Arce", 
            edad="29 Años"});
        }
        // GET: api/Alumnos
        public List<Alumnos> Get()
        {
            return alumno;
        }

        // GET: api/Alumnos/5
        public Alumnos Get(int id)
        {
            return alumno.Where(x => x.Id == id).FirstOrDefault();
        }

        // POST: api/Alumnos
        public void Post([FromBody]string value)
        {
        }

        // DELETE: api/Alumnos/5
        public void Delete(int id)
        {
        }
    }
}

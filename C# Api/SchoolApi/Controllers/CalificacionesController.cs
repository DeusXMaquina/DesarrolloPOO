using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SchoolApi.Models;

namespace SchoolApi.Controllers
{
    public class CalificacionesController : ApiController
    {
        List<Calificaciones> calificacion = new List<Calificaciones>();

        public CalificacionesController()
        {
            calificacion.Add(new Calificaciones { Id=1, idAlumno=1, idMateria=1, calificacion=100});
        }
        // GET: api/Calificaciones
        public List<Calificaciones> Get()
        {
            return calificacion;
        }

        // GET: api/Calificaciones/5
        public Calificaciones Get(int id)
        {
            return calificacion.Where(x => x.Id == id).FirstOrDefault();
        }

        // POST: api/Calificaciones
        public void Post([FromBody]string value)
        {
        }

        // DELETE: api/Calificaciones/5
        public void Delete(int id)
        {
        }
    }
}

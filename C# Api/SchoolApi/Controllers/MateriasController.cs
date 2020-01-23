using SchoolApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SchoolApi.Controllers
{
    public class MateriasController : ApiController
    {
        List<Materias> materia = new List<Materias>();

        public MateriasController()
        {
            materia.Add(new Materias { Id=1, nombreMateria="Programacion Estructurada" });
        }
        // GET: api/Materias
        public List<Materias> Get()
        {
            return materia;
        }

        // GET: api/Materias/5
        public Materias Get(int id)
        {
            return materia.Where(x => x.Id == id).FirstOrDefault();
        }

        // POST: api/Materias
        public void Post([FromBody]string value)
        {
        }

        // DELETE: api/Materias/5
        public void Delete(int id)
        {
        }
    }
}

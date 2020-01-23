using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SchoolApi.Models;

namespace SchoolApi.Controllers
{
    public class CarrerasController : ApiController
    {
        List<Carreras> carrera = new List<Carreras>();
        public CarrerasController() 
        {
            carrera.Add(new Carreras { Id=6, nombreCarrera="Ingenieria en Sistemas Computacionales" });
        }
        // GET: api/Carreras
        public List<Carreras> Get()
        {
            return carrera;
        }

        // GET: api/Carreras/5
        public Carreras Get(int id)
        {
            return carrera.Where(x => x.Id == id).FirstOrDefault();
        }

        // POST: api/Carreras
        public void Post([FromBody]string value)
        {
        }

        // DELETE: api/Carreras/5
        public void Delete(int id)
        {
        }
    }
}

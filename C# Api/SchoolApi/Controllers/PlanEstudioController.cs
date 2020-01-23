using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SchoolApi.Models;

namespace SchoolApi.Controllers
{
    public class PlanEstudioController : ApiController
    {
        List<PlanEstudios> planestudio = new List<PlanEstudios>();

        public PlanEstudioController() 
        {
            planestudio.Add(new PlanEstudios { Id=1, idCarrera=6, idMateria=1 });
        }
        // GET: api/PlanEstudio
        public List<PlanEstudios> Get()
        {
            return planestudio;
        }

        // GET: api/PlanEstudio/5
        public PlanEstudios Get(int id)
        {
            return planestudio.Where(x => x.Id == id).FirstOrDefault();
        }

        // POST: api/PlanEstudio
        public void Post([FromBody]string value)
        {
        }

        // DELETE: api/PlanEstudio/5
        public void Delete(int id)
        {
        }
    }
}

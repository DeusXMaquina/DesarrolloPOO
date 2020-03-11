using SchoolApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.SqlClient;
using System.Web.Http.Cors;

namespace SchoolApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class MateriasCursadasController : ApiController
    {
        private string conString = "Data Source=FLDLAEFBSR;Database=SchoolProject;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
        List<MateriasCModel> materiaCursada = new List<MateriasCModel>();

        // GET: api/MateriasCursadas
        public List<MateriasCModel> Get()
        {
                return materiaCursada;
        }

        // GET: api/MateriasCursadas/5
        public List<MateriasCModel> Get(int id)
        {
            using (SqlConnection connection = new SqlConnection(conString))
            using (SqlCommand cmd = new SqlCommand($"SELECT * FROM materiasCursadas({id})", connection))
            {
                connection.Open();
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            materiaCursada.Add(new MateriasCModel
                            {
                                nombreMateria = reader.GetString(reader.GetOrdinal("nombreMateria")),
                                calificacion = reader.GetInt32(reader.GetOrdinal("calificacion"))
                            });
                        }
                    }
                }
                connection.Close();
            }
                return materiaCursada;
        }

        // POST: api/MateriasCursadas
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/MateriasCursadas/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/MateriasCursadas/5
        public void Delete(int id)
        {
        }
    }
}

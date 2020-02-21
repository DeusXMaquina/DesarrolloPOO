using SchoolApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Data.SqlClient;

namespace SchoolApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class AlumnController : ApiController
    {
        private string conString ="Data Source=FLDLAEFBSR;Database=SchoolProject;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
        List<AlumnModel> alumno = new List<AlumnModel>();

        // GET: api/Alumn
        public List<AlumnModel> Get()
        {
            return alumno;
        }

        // GET: api/Alumn/5
        public List<AlumnModel> Get(int id)
        {
            using (SqlConnection connection = new SqlConnection(conString))
            using (SqlCommand cmd = new SqlCommand($"SELECT * FROM informacionAlumno({id})", connection))
            {
                connection.Open();
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            alumno.Add(new AlumnModel
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("id")),
                                nombre = reader.GetString(reader.GetOrdinal("nombreAlumno")),
                                apeidoPaterno = reader.GetString(reader.GetOrdinal("apeidoPaterno")),
                                apeidoMaterno = reader.GetString(reader.GetOrdinal("apeidoMaterno")),
                                edad = reader.GetString(reader.GetOrdinal("edad")),
                                carrera = reader.GetString(reader.GetOrdinal("nombreCarrera")),
                                materias = reader.GetInt32(reader.GetOrdinal("materias"))
                            });
                        }
                    }
                }
                connection.Close();
            }
            
            return alumno;
        }

        // POST: api/Alumn
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Alumn/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Alumn/5
        public void Delete(int id)
        {
        }
    }
}

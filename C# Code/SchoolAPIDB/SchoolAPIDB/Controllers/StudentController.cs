using System.Collections.Generic;
using System.Data.SqlClient;
using System.Web.Http;
using System.Web.Http.Cors;
using SchoolAPIDB.Models;

namespace SchoolAPIDB.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class StudentController : ApiController
    {
        List<StudentModel> student = new List<StudentModel>();
        ConnectionString conString = new ConnectionString();
        // GET: api/Student/5
        public List<StudentModel> Get(int id)
        {
            using (SqlConnection connection = new SqlConnection(conString.connectionString))
            using (SqlCommand cmd = new SqlCommand($"SELECT id, name, lastname, secondlastname, age, career, courses FROM studentInformation({id})", connection)) 
            {
                connection.Open();
                using (SqlDataReader reader = cmd.ExecuteReader()) 
                {
                    if (reader.HasRows) 
                    {
                        while (reader.Read())
                        {
                            student.Add(new StudentModel
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("id")),
                                Name = reader.GetString(reader.GetOrdinal("name")),
                                LastName = reader.GetString(reader.GetOrdinal("lastname")),
                                SecondLastName = reader.GetString(reader.GetOrdinal("secondlastname")),
                                Age = reader.GetString(reader.GetOrdinal("age")),
                                Career = reader.GetString(reader.GetOrdinal("career")),
                                NumberOfCourses = reader.GetInt32(reader.GetOrdinal("courses"))
                            });
                        }
                    }
                }
                connection.Close();
            }
            return student;
        }
    }
}

using SchoolAPIDB.Models;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Web.Http;

namespace SchoolAPIDB.Controllers
{
    public class CoursesController : ApiController
    {
        List<CoursesModel> courses = new List<CoursesModel>();
        ConnectionString conString = new ConnectionString();
        // GET: api/Courses/5
        public List<CoursesModel> Get(int id)
        {
            using (SqlConnection connection = new SqlConnection(conString.connectionString))
            using (SqlCommand cmd = new SqlCommand($"SELECT course, grade FROM gradedCourses({id})", connection))
            {
                connection.Open();
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows) 
                    {
                        while (reader.Read())
                        {
                            courses.Add(new CoursesModel
                            {
                                Course = reader.GetString(reader.GetOrdinal("course")),
                                Grade = reader.GetInt32(reader.GetOrdinal("grade"))
                            });
                        }
                    }
                }
            }
                return courses;
        }
    }
}

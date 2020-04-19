using ProyectoBaseDatos.Models;
using SchoolAPIDB.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Web.Http;
using System.Web.Http.Cors;

namespace SchoolAPIDB.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CoursesController : ApiController
    {
        private Connection connection { get; set; }
        List<CoursesModel> list = new List<CoursesModel>();

        public CoursesController() 
        {
            connection = new Connection();
        }

        // GET: api/Courses/5
        public List<CoursesModel> Get(int id)
        {
            string command = "dbo.gradedCourses";
            SqlParameter[] parameters = new SqlParameter[1]
            {
                new SqlParameter("@idStudent", id)
            };

            var data = connection.ReadStoreProcedure(command, parameters);
            var courses = new List<CoursesModel>();

            if (data.Count == 0) 
            {
                return courses;
            }

            for (int index = 0; index < data.Count; index++)
            {
                var CoursesModel = new CoursesModel();

                var columns = data[index].Rows;

                CoursesModel.Course = columns[0];
                CoursesModel.Grade = Convert.ToInt32(columns[1]);

                courses.Add(CoursesModel);
            }
            return courses;
        }
    }
}

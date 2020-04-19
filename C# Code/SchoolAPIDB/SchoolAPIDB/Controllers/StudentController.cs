using ProyectoBaseDatos.Models;
using SchoolAPIDB.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace SchoolAPIDB.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class StudentController : ApiController
    {
        private Connection connection { get; set; }
        List<StudentModel> list = new List<StudentModel>();
        public StudentController()
        {
            connection = new Connection();
        }

        // GET: api/Test/5
        public StudentModel Get(int id)
        {
            string command = "dbo.studentInformation";
            SqlParameter[] parameters = new SqlParameter[1]
            {
                new SqlParameter ("@idStudent", id)
            };

            var data = connection.ReadStoreProcedure(command, parameters);
            var studentModel = new StudentModel();
            if (data.Count == 0)
            {
                return studentModel;
            }
            var column = data[0].Rows;

            studentModel.Id = Convert.ToInt32(column[0]);
            studentModel.Name = column[1];
            studentModel.LastName = column[2];
            studentModel.SecondLastName = column[3];
            studentModel.Age = column[4];
            studentModel.Career = column[5];
            studentModel.NumberOfCourses = Convert.ToInt32(column[6]);

            return studentModel;
        }
    }
}

using SchoolAPIDB.Models;
using System.Data.SqlClient;
using System.Web.Http;
using System.Web.Http.Cors;

namespace SchoolAPIDB.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ValidationController : ApiController
    {
        ValidationModel val = new ValidationModel();
        ConnectionString conString = new ConnectionString();
        // GET: api/Validation/5
        public bool Get(int id)
        {
            using (SqlConnection connection = new SqlConnection(conString.connectionString))
            using (SqlCommand cmd = new SqlCommand($"SELECT dbo.ValidUser({id}) AS Valid", connection))
            {
                connection.Open();
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            val.isValid = reader.GetBoolean(reader.GetOrdinal("Valid"));
                        }
                    }
                }
            }
            return val.isValid;
        }
    }
}
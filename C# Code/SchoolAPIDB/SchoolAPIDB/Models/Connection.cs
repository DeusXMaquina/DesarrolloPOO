using SchoolAPIDB.Models;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace ProyectoBaseDatos.Models
{
    public class Connection
    {
        private SqlConnection Server { get; set; }


        ConnectionString conString = new ConnectionString();
        public Connection()
        {
            Server = new SqlConnection(conString.connectionString);
        }

        private bool OpenConnection()
        {
            Server.Open();
            return Server.State == ConnectionState.Open;
        }

        private bool CloseConnection()
        {
            Server.Close();
            return Server.State == ConnectionState.Closed;
        }

        public List<Row> ReadStoreProcedure(string command, SqlParameter[] parameters)
        {
            SqlCommand SQLCommand = new SqlCommand();

            SQLCommand.CommandType = CommandType.StoredProcedure;
            SQLCommand.CommandText = command;
            SQLCommand.Parameters.AddRange(parameters);

            OpenConnection();
            SQLCommand.Connection = Server;
            var info = new List<Row>();

            var result = SQLCommand.ExecuteReader();
            while (result.Read())
            {
                Row row = new Row();

                for (int i = 0; i <= result.FieldCount - 1; i++)
                {
                    row.Rows.Add(result[i].ToString());

                }

                info.Add(row);
            }
            result.Close();
            CloseConnection();
            return info;
        }

        public DataSet Read(string command)
        {
            var info = new DataSet();

            OpenConnection();
            var adaptador = new SqlDataAdapter(command, Server);
            adaptador.Fill(info);
            CloseConnection();
            return info;
        }

        public bool ExecuteCommand(string command, SqlParameter[] parameters)
        {
            SqlCommand SQLCommand = new SqlCommand();
            SQLCommand.CommandType = CommandType.Text;
            SQLCommand.CommandText = command;
            SQLCommand.Parameters.AddRange(parameters);

            OpenConnection();

            SQLCommand.Connection = Server;

            var result = SQLCommand.ExecuteNonQuery();

            CloseConnection();

            return result > 0;
        }
    }
}
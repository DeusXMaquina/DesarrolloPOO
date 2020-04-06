using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SchoolAPIDB.Models
{
    public class StudentModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string SecondLastName { get; set; }
        public string age { get; set; }
        public string career { get; set; }
        public int numberOfCourses { get; set; }
    }
}
namespace SchoolAPIDB.Models
{
    public class StudentModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string SecondLastName { get; set; }
        public string Age { get; set; }
        public string Career { get; set; }
        public int NumberOfCourses { get; set; }
    }
}
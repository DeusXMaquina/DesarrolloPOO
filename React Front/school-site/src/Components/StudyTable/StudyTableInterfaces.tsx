export interface IStudent {
    [Name:string]: string;
    LastName: string;
    SecondLastName: string;
    Age: string;
    Career: string;
    NumberOfCourses: string;
  }

export interface ICourses {
  Course: string;
  Grade: number;
}

export interface studentProps {
  Student: {
    [Name:string]: string;
    LastName: string;
    SecondLastName: string;
    Age: string;
    Career: string;
    NumberOfCourses: string;
  },
  Courses: {
    Course: string;
    Grade: number;
  }
}
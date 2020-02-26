interface Person 
{
    Name: string;
    Age:number;
}

class Student implements Person{
    Name: string;
    Age:number;
    Class: string;
    Favourite_Subject: string;

    constructor(Name: string ,Age:number , cls: string, Fav_Subject: string)
    {
        this.Name=Name;
        this.Age=Age;
        this.Class=cls;
        this.Favourite_Subject= Fav_Subject;
    }
}

class school
{
    schoolName : string;
    studentList : Array<Student> =[];
    constructor(schoolName: string, studentList: Student[] )
    {
        this.schoolName = schoolName;
        this.studentList = studentList;
    }
    
}

function add()
{
    var Name = (<HTMLInputElement>document.getElementById('sname')).value;
    var Age = parseInt((<HTMLInputElement>document.getElementById('sage')).value);
    var Gender = (<HTMLInputElement>document.getElementById('gender')).value;
    var Class = (<HTMLInputElement>document.getElementById('cls')).value;
    var Course = (<HTMLInputElement>document.getElementById('course')).value;
    var Email = (<HTMLInputElement>document.getElementById('email')).value;
    var Mobile = parseInt((<HTMLInputElement>document.getElementById('mob')).value);
    var Fav_Subject = (<HTMLInputElement>document.getElementById('sfav')).value;
    var school = (<HTMLInputElement>document.getElementById('school')).value;
    let s1 = new Student (Name, Age, Class, Fav_Subject);
}
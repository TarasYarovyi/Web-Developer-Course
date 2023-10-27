const school = {
  name: "im.Banacha",
  city: "Wro",
  students: [],
  addStudent: function (name, surname) {
    const student = {
      name: name,
      surname: surname,
    };
    this.students[this.students.length] = student;
  },
  showStudents: function () {
    if (this.students.length) {
      for (let i = 0; i < this.students.length; i++) {
        const element = this.students[i];
        console.log(`${element.name} ${element.surname}`);
      }
    } else console.log("Szkołą neima studentów");
  },
  showStudentsByName: function (name) {
    for (let i = 0; i < this.students.length; i++) {
      const element = this.students[i];
      if (element.name === name) {
        console.log(`${element.name} ${element.surname}`);
      }
    }
  },
  getNumStudents: function () {
    console.log("Ilość studentów w Szkole: ", this.students.length);
  },
  resetStudents: function () {
    this.students = [];
  },
};

school.addStudent("Piotr", "Ragan");
school.addStudent("Piotr", "Kubczak");
school.addStudent("Piotr", "Kordysz");
school.addStudent("Przemek", "Stolarski");
school.addStudent("Jarek", "Mucha");
school.showStudents();
school.getNumStudents();
school.showStudentsByName("Piotr");
school.resetStudents();
school.getNumStudents();

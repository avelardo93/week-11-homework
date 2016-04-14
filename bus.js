var Bus = function(studentsOnTheBus, driverName, color, gas){
  this.studentsOnTheBus = [];
  this.driverName = "";
  this.color = "";
  this.gas = 0;
  this.studentEntersBus = function(){
    this.studentsOnTheBus.push(new Student(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase));
  }
  this.busChatter = function(){
    console.log(Student.catchPhrase);
  }
}

module.exports = Bus;
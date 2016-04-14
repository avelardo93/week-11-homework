
var Student = function(name, gender, grade, gpa, detentions, sleepingInClass, catchPhrase){
  	this.name = name;
  	this.gender = gender;
  	this.grade = grade;
  	this.gpa = gpa;
  	this.detentions = detentions;
  	this.sleepingInClass = sleepingInClass;
  	this.catchPhrase = catchPhrase;
  	this.canStudentHaveFun = function(){
    if((this.detentions < 10) && (this.gpa > 2)){
      console.log("The student can have fun!!!! ")
    }else{
      console.log("The student can't have fun. Darn!");
    }
  };
};


module.exports = Student;
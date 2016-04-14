var prompt = require('prompt');
var Student = require('./student.js');
var Bus = require('./bus.js');

prompt.start();

prompt.get(['driverName', 'color', 'gas']) function(err, result){
    var bus = new Student(result.driverName, result.color, result.gas);
    prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result) {
    var student = new Student(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase)
    student.canStudentHaveFun();
	});
	bus.studentEntersBus();
}

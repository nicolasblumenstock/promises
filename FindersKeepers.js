var theArray = [1,3,5,8,9,10];
var theArray2 = [1,3,5,9];
var theArray3 = ['Jim','Indian','Marsh','Glitch'];
var hayesMakesTooManyLongVariableNames = ['Jim','Indian','Marsh']
var theFunction = function(num){
	return num % 2 === 0;
}
var hamBone = function(str){
	return str.indexOf('itch') !== -1;
}


function findElement(array,callback){
 	var exists = false;
 	for(let i = 0; i < array.length; i++){
 		if(callback(array[i])){
			console.log(array[i]);
			exists = true;
 			break;
 		}
 	}
 	if (!exists){
 		console.log('false')
 	}
}

findElement(theArray,theFunction)
findElement(theArray2,theFunction)
findElement(theArray3,hamBone);
findElement(hayesMakesTooManyLongVariableNames,hamBone)

var students = ['Rissa', 'Merilee', 'Chris','Stephen'];
students.map((student,index)=>{
	console.log(student);
})
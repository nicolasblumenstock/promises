// ++++ promises ++++
// ++++ are a way to manage async without passing zillions of call back functions around or nexting to no end. ++++
// ++++ ie this ... ++++
// connection.query(query1, (results1)=>{
// 	connection.query(query2,(results2)=>{
// 		connection.query(query3,(res3)=>{
// 			connection.query(query4,(res4)=>{
// 				res.send('y tho');
// 			});
// 		});
// 	});
// });

// connection.query(query1){
// ++++ do some stuff ++++
	// function fromEarlier(results)
	// function fromEvenEarlier(lastResults);
	// function soON(andSoForth);
// };

// function successCallback(result){
// 	console.log('success: ' + result);
// }

// function failureCallback(error){
// 	console.log('git gud: ' + error);
// }

// function checkName(name,winning,losing){
// 	if(name == 'Rob'){ winning('name is rob') }
// 	else{ losing('sorry. not rob.') };
// }

// checkName('Rob', successCallback, failureCallback);

// // ++++ a promise is just a JS constructor that gives you a few methods ++++
// // ++++ namely: all, race, reject, resolve, then ++++

// let myFirstPromise = new Promise((resolve,reject)=>{
// // ++++ resolve and reject are callbacks ++++
// // ++++ run resolve when done with async stuff. run reject if it failed ++++
// // ++++ setTimeout will stand in for an AJAX or SQL request ++++
// 	setTimeout(function(){
// 		resolve('Success')
// 	},250);
// });

// console.log(myFirstPromise);
// myFirstPromise.then((successMessage)=>{
// 	console.log(successMessage);
// 	console.log(myFirstPromise);
// });
// console.log(myFirstPromise);

function one(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve('4 seconds have passed')
		}, 4000);
	});
};

function two(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve('2 seconds have passed')
		}, 2000);
	});
}

var promiseOne = one();
var promiseTwo = two();
// console.log(promiseOne);
// console.log(promiseTwo);
// promiseOne.then((successMessage)=>{
// 	console.log(successMessage);
// });
// promiseTwo.then((successMessage)=>{
// 	console.log(successMessage);
// });

var promises = [];

promises.push(promiseOne);
promises.push(promiseTwo);

// ++++ all will wait until every promise in the array has resolved. ++++
// ++++ it will have an array of each argument passed to each resolve ++++
Promise.all(promises).then((data)=>{
	console.log('finished');
	console.log(data);
});

Promise.race(promises).then((data)=>{
	console.log('and the winner is ... ');
	console.log(data);
})
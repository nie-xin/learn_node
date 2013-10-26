//var regular_joe = 'I am global!';

// function prison () {
// 	// var prisoner1 = 'I am locked!';
// 	// prisoner2 = 'I have escaped!';

// }

// function prison () {
// 	// i will be global variable
// 	for ( i = 0; i < 10; i++ ) {
// 		console.log(i + ' prisoner');
// 	}
// }
// prison();
// console.log(i);	// i is global variable

function prison () {
	// i will be local variable
	for ( var i = 0; i < 10; i++ ) {
		console.log(i + ' prisoner');
	}

	console.log(i);	// but i is not on the scope of for loop
}
prison();


// function prison () {
// 	// best pratice
// 	var i;
// 	for ( i = 0; i < 10; i++ ) {
// 		console.log(i + ' prisoner');
// 	}
// }
// prison();
// console.log(i);	// i is local variable

//console.log( regular_joe );

// local variable that is not accesible outside of function
//console.log( prisoner );$
//
// not supported in node
// let ( prisoner = 'I am in prison!' ) {
// 	console.log( prisoner );
// }
//console.log( prisoner2 );


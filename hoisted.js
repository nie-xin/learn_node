function hoisted () {
	console.log(v);
	var v = 1;
	console.log(v);
}
hoisted();

function prison () {
	console.log(prisoner);
	var prisoner = 'Now I am defined!';

	console.log(prisoner);
}
prison();

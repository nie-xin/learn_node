var regular = 'regular_joe is assigned';
function prison () {
	console.log(regular_joe);	//undefine: the declarasion of local regular_joe is hoisted before check the global regular variale
	var regular_joe;
}
prison();

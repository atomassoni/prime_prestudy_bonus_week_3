function functionA (number){
	 
	while (number<2) {
		number+=0.2;
	}
	return number;

}

function functionB (number) {
	if (number<1) {
		return 5;
	} else {
		return number/2;
	}
}

function functionC (number) {

	return number/2;
}



console.log(functionA(functionB(functionC(7))));


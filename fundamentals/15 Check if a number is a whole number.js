//my solution
function myFunction ( a ) {
	let buffer = a.toString();
	return ((buffer.includes(".")) ? false : true);
}

//The author's solution
// function myFunction(a) {
// 	return a - Math.floor(a) === 0
//   }

console.log(myFunction(4))
console.log(myFunction(1.123))
console.log(myFunction(1048))
console.log(myFunction(10.48))
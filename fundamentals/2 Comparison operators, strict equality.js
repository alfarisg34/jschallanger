//my solution
function myFunction ( a, b ) {
	return a===b;
}

//The author's solution
// function myFunction(a, b) {
//     return a === b;
// }

console.log(myFunction(2, 3)) //Expected false
console.log(myFunction(3, 3)) //Expected true
console.log(myFunction(1, '1')) //Expected false 
console.log(myFunction('10', '10')) //Expected true 
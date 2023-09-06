//my solution
function myFunction ( a, b ) {
	return (a.includes(b) ? b + a : a + b);
}

//The author's solution
// function myFunction(a, b) {
//     return a.indexOf(b) === -1 ? a + b : b + a
// }

console.log(myFunction('cheese', 'cake'))
console.log(myFunction('lips', 's'))
console.log(myFunction('Java', 'script'))
console.log(myFunction(' think, therefore I am', 'I'))

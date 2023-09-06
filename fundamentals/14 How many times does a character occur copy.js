//my solution
function myFunction ( a , b ) {
	let count=0;
	for(let i = 0 ; i < b.length ; i++){
		if(b.charAt(i)==a) {
			count++;
		}
	}
	return count;
}

//The author's solution
// function myFunction(a, b) {
// 	return b.split(a).length - 1
// }

console.log(myFunction('m', 'how many times does the character occur in this sentence?'))
console.log(myFunction('h', 'how many times does the character occur in this sentence?'))
console.log(myFunction('?', 'how many times does the character occur in this sentence?'))
console.log(myFunction('z', 'how many times does the character occur in this sentence?'))
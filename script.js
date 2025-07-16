function firstNonRepeatedChar(str) {
 // Write your code here
	let str1 = str.toLowerCase();
	for (let i = 0; i < str1.length; i++) {
		let char = str1[i];
		if(str1.indexOf(char) === str1.lastIndexOf(char)){
			return str[i];
		}
	}
	return null;	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

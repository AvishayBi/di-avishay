// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).

console.log(undTen);
let i=0;
let text="*";
do {
	text += "*";
	i++;
	console.log(text);
}
while (i < 10);
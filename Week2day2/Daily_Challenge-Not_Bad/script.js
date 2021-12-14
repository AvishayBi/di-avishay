
//Daily Challenge: Not Bad

let sentence = "'This dinner is not that bad ! You cook well";
let wordNot = sentence.search("not");
let wordbad = sentence.search("bad");
if (wordbad>wordNot)
{
	let difWord = wordbad - wordNot
	console.log(`difWord: ${difWord}`);
	console.log(`wordNot: ${wordNot}`);
	let cutText = sentence.substr(wordNot,difWord+3);
	console.log(cutText);
	let result = sentence.replace(cutText,"good");
	console.log(result);
}	
else 
{
	console.log(sentence);
}

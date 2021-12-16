
// Daily Challenge: Words In The Stars

// Use functions, string methods, array methods and loops
// Prompt(array) the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, 
//in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]

// Hint
// The number of stars that wraps the sentence, 
//must depend on the length(string) of the longest word.

function wordInStars(array)
{
	let wordLen = 0
	let longestWord=0
	for (let i of wordsOfUser)
	{
		wordLen=wordsOfUser[i].length
	}
	if (wordLen>longest)
	{
		longestWord=wordLen
	}


}

function lineofStars(longword)
{
	let starLine=*
	for(let j=0,j<longword.length,j++)
	{
		starLine+=*
	}
	Console.log(starLine);
}
let wordsOfUser= Prompt()
wordInStars(wordsOfUser)

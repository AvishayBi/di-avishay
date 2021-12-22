// {
// 	//font-family: 'PT Sans', sans-serif;
// }

// body{
// 	padding: 50px
// }

function playTheGame()
{
	if (confirm("Would like to play the game!") == true) 
	{
		console.log("You pressed OK!");
		var userNumber=Number(prompt("Please enter a value ","xxx"));
		if(isNaN(userNumber))
		{
			console.log("No problem, Goodbye");	
		} else if(userNumber>0 && userNumber<11){
			console.log("great Number", userNumber)
				// let guess=Math.random();
				console.log(Math.random());
				var computerNumber=Math.random();
				computerNumber=Math.round(computerNumber);
				// let x = Math.round(guess);
				console.log(`Your number is:${userNumber} the computer number:${computerNumber}`);
				test(userNumber,computerNumber);
				// console.log(x);
			} else if(userNumber>10){
				console.log("Sorry Not a good number, Goodbye",userNumber)
			}

		} else
		{
			console.log("No problem, Goodbye");

		}
		return(userNumber,computerNumber)
	}


	// Second Part
	// Outside of the playTheGame() function, create a new function named test(userNumber,computerNumber) that takes 2 parameters : userNumber and computerNumber

	// The point of this function is to check if the userNumber is the same as the computerNumber:
	// If userNumber is equal to computerNumber, alert “WINNER” and stop the game.

	// If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

	// If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

	// If the user guessed more than 3 times, alert “out of chances” and exit the function.

	var testrun=0;
	function test(userNumber,computerNumber)
{//0
	console.log(testrun);
	console.log(computerNumber);
	console.log(userNumber);
	if (testrun<=3) 
{ //1
	if(userNumber==computerNumber)
	{ //2
		console.log(winner);
		return;
		} //2
		else if(userNumber>computerNumber)
 		{//3
 			// console.log(“Your number is bigger then the computers, guess again”);
 			console.log("Your number is bigger");
 			testrun++;
 			playTheGame();
		}//3
		else(userNumber<computerNumber)
 		{//4
 			// console.log(“Your number is smaller then the computer’s, guess again”);
 			console.log("Your number is smaller");
 			testrun++
 			playTheGame();
		}	//4
 	}	//1
 	else
 {//5
 	prompt("out of chances");
 	testrun=0;
 	return;
 }//5
}//0



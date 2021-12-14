
//Exercise 1: Simple If/Else Statement

let x = 5;
let y = 2;

if (x>=y) 
{
	console.log("X is the biggest number")
}
else
{
	console.log("Y is the biggest number")
}


// Exercise 2: Chihuahua


let newDog = "Chihuahua" ;
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog == "Chihuahua") 
{
	console.log("I love Chihuahuas, its my favorite dog breed");
}
else
{
	console.log("I dont care, I prefer cats")
}

// Exercise 3: Even Or Odd

// Instructions
// Prompt the user for a number and save it to a variable.
// Check whether the variable is even or odd.
// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// If it is odd, display: “


//let person = prompt("Please enter your name", "Harry Potter");
let CheckNumer = prompt("Enter a Number","number");

if(CheckNumer % 2== 0)
{
	console.log("x is an even number");
}
else
{
	console.log("x is an odd number")
}


// Exercise 4: Group Chat

// Instructions
// Below is an array of users that are online in a group chat.

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if (users.length=="0") 
{
	console.log("o one is online");
}
else
{
	if (users.length=="1") 
	{
		console.log(`${users} is online`);
	}
	else
	{
		let noUsersOnline= users.length - 2;
		//console.log(noUsersOnline);
		//console.log('${users} and ');
		console.log(`${users} and ${noUsersOnline} more are online`);
	}
}
// Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
// If there is no users (the users array is empty), console.log “no one is online”.
// If there is 1 user, console.log “<name_user> is online”.
// If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
// If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
// For example, if there are 5 users, it should display:
// name_user1, name_user2 and 3 more are online










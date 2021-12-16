// Exercise 1 : Information
// Part I : function with no parameters
// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

// function infoAboutMe()
// {
// 	console.log("Avishay Biton 45")
// }
// infoAboutMe()
// // Part II : function with three parameters
// // Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// // The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// // Call the function twice with the following arguments:
// // infoAboutPerson("David", 45, "blue")
// // infoAboutPerson("Josh", 12, "yellow")
// function  infoAboutPerson(personName, personAge, personFavoriteColor)
// {
// 	console.log(`You name is:${personName},you are ${personAge} years old, your favorite color is ${personFavoriteColor} `)
// }
// infoAboutPerson("David", 45, "blue");
// infoAboutPerson("Josh", 12, "yellow");

// Exercise 2 : Tips
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// 1. Create a function named calculateTip() that takes no parameter.
// 2.Inside the function, ask John for the amount of the bill.

// function calculateTip() /////
// {
// 	let amountBill=prompt("Enter amount of the bill", "total price");
// 	let tip=0;
// 	if(amountBill< 50)
// 	{
// 		tip=amountBill*0.2
// 	}else if (amountBill>200) 
// 	{
// 		tip=amountBill*0.10
// 	}else
// 	{
// 		tip=amountBill*0.15
// 	}
// 	console.log(`The finall bill is ${amountBill} + ${tip}`)
// }
// calculateTip();

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

//4. Console.log the tip amount and the final bill (bill + tip).

// 5. Call the calculateTip() function.




// Exercise 3 : Find The Numbers Divisible By 23
// Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313

// function sDivisible(divisor) /////
// {
// 	letdivSum=0
// 	for (j=0;j<500;j++)
// 	{
// 		if ((j%divisor)==0)
// 		{
// 			console.log(j);
// 			letdivSum+=j;
// 		}
// 	}
// 	console.log(`sum:${letdivSum}`);
// }
// sDivisible(prompt("Enter a number to divisible", "number"));


// Bonus: Add a parameter divisor to the function.

// isDivisible(divisor)

// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and the

//Exercise 4 : Shopping List
let stock = { 
	"banana": 6, 
	"apple": 0,
	"pear": 12,
	"orange": 32,
	"blueberry":1
}  

let prices = {    
	"banana": 4, 
	"apple": 2, 
	"pear": 1,
	"orange": 1.5,
	"blueberry":10
} 

let shoppingList = ["banana","orange","apple"]

function myBill()
{
	let sumBill=0
	for (let FuI of shoppingList)
	{
		if(stock[FuI]>0)
		{
			stock[FuI]--;
			sumBill+=prices[FuI];
			console.log(FuI,sumBill);
		}

		//console.log	(shoppingList)
		console.log(stock[FuI])
		// if (stock.find(FuI))
		// {
		// 	stock.find(FuI)--;
		// 	sumBill+=prices.find(FuI);
		// 	console.log(FuI,sumBill);

		// }
	}
	console.log(`Toal cart bill is ${sumBill}`)
}
myBill()
//Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters.

// Bonus: If the item is in stock, decrease the item’s stock by 1

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock.
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.



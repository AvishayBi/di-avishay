// // Part I - Review About Arrays

// let people = ["Greg", "Mary", "Devon", "James"]

// // 1.Write code to remove “Greg” from the people array.

// people.shift("Greg");
// console.log(people);

// //2.Write code to replace “James” to “Jason”.
// let findName = people.indexOf("James");
// console.log(findName);
// people.splice(findName,1,"Jason");
// console.log(people);

// //3.Write code to add your name to the end of the people array
// people.push("Avishay");
// console.log(people);

// //4.Write code that console.logs Mary’s index.
// let mf = people.indexOf("Mary");
// console.log(`The index of Mary:${mf}`);

// //5.Write code to make a copy of the people array using the slice method.
// // //The copy should NOT include “Mary” or your name.
// //let rc people.slice("Mary", "Avishay");
// let run1 = people.slice(1,4);
// console.log(run1);

// //6.Write code that gives the index of “Foo”. Why does it return -1 ?
// // coudnt find value returns -1
// let ff = people.indexOf("Foo");
// console.log(`Cant find "Foo" in people array returns ${ff}`);

// //7.Create a variable called last which value is the last element of the array.
// //Hint: What is the relationship between the index of the last element in the array and the length of the array?
// let numPosLas = people.length-1
// console.log(numPosLas);
// console.log(people[numPosLas]);
// //numer is bigger in 1 the position

// //Part II - Loops

// //1.Using a loop, iterate through the people array and console.log each person.

// for(let dp = 0;people.length> dp; dp++)
// {
// 	console.log(people[dp]);
// }

// //2.Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// console.log(people);
// for(let dp = 0;people.length> dp; dp++)
// {
// 	console.log(people[dp]);
// 	if(people[dp]=="Jason")
// 	{
// 		break;
// 	}
// }

// //Exercise 2 : Your Favorite Colors
// //1.Create an array called colors where the value is a list of your five favorite colors.
// let colors=["red","green","blue","orange","white"];
// console.log(colors);
// //2.Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// for(let cc = 0;colors.length> cc; cc++)
// 	console.log(`My ${cc}# color is:${colors[cc]}`);

// //Exercise 3 : Repeat The Question
// //1.Prompt the user for a number.
// //Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// //let userData = prompt("Enter a number", "number");
// //console.log(typeof prompt("Enter a number", "number"));


// //2.While the number is smaller than 10 continue asking the user for a new number.
// //Tip : Which while loop is more relevant for this situation?

// let undTen=0;
// do {
// 	undTen = prompt("Enter Number below 10","0-9")
// }
// while (undTen > 10);
// console.log(undTen);
// let i=0;
// let text="*";
// do {
// 	text += "*";
// 	i++;
// 	console.log(text);
// }
// while (i < 10);

//Exercise 4 : Building Management
//1.Copy and paste this object to your Javascript file.
let building = {
	numberOfFloors : 4,
	numberOfAptByFloor : {
		firstFloor : 3,
		secondFloor : 4,
		thirdFloor : 9,
		fourthFloor : 2,
	},
	nameOfTenants : ["Sarah", "Dan", "David"],
	numberOfRoomsAndRent:  {
		sarah: [3, 990],
		dan :  [4, 1000],
		david : [1, 500],
	},
}
//2.Console.log the number of floors in the building.
console.log(building.numberOfFloors);

//3.Console.log how many apartments are on the floors 1 and 3.

console.log(`apartments are on the floors 1: ${building.numberOfAptByFloor.firstFloor}`);

//4.Console.log the name of the second tenant and the number of rooms he has in his apartment.
let nost = nameOfTenants[1];
let nor = nameOfTenants.numberOfRoomsAndRent[1];
console.log(nost,nor);
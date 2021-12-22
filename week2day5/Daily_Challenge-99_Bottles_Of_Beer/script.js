// {
// 	//font-family: 'PT Sans', sans-serif;
// }

// body{
// 	padding: 50px
// }
function Count_Bottles()
{//1
	var bottlesNumber=Number(prompt("Please enter a value ","xxx"));
	for(let numberUp=1;bottlesNumber>=numberUp;numberUp++)
	{//2
		console.log(`${bottlesNumber} bottles of beer on the wall`);
		console.log(bottlesNumber,"bottles of beer");
		console.log("-------------");
		if(numberUp==1)
		{//3
			console.log("Take 1 down, pass it around");
			console.log("---------");
			bottlesNumber-=numberUp;

		}else//3
		{//4
			//Take 2 down, pass them around
			console.log(`Take ${numberUp} down, pass them around`);
			//96 bottles of beer on the wall
			bottlesNumber-=numberUp;
			// console.log(bottlesNumber,"bottles of beer on the wall");




		}//4

	}//2
	console.log("************************")
	console.log(bottlesNumber,"The end");

}//1





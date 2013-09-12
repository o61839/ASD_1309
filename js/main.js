//Jenney Grover
//ASD 1309
//Christmas List
//September 2013

$("#homepage").on('pageinit', function() 
{
	//console.log("Whoa stop dude!");
	$("#daysTo").click(function() 
	{
		//var itsChristmas = function()
		//{	
			//Date Comparison
			dayOne = new Date(); 
			//the next two lines test the day of Christmas code/message
			//dayOne.setMonth(11); 
			//dayOne.setDate(25);
			dayTwo = new Date(); 
			dayTwo.setMonth(11); 
			dayTwo.setDate(25); 
			//the year should be the current year ??? I hope???
			var millesecondsInDay = 86400000;
			var millesecondsInHour = 3600000;
	
			if (dayTwo.getTime() === dayOne.getTime())
			{
				var itsToday = 0;
				$("#daysTill").append(itsToday); 
				var greetings = "Merry Christmas, Feliz Navidad, Mele Kalikimaka";
				$("#today").append(greetings); 
				return false; 
			} 
			else 
			{
				var timeDifference = (dayTwo.getTime() - dayOne.getTime())
			};
	
			if (timeDifference < millesecondsInDay) 
			{
				var hoursLeft = timeDifference / millesecondsInHour
				var returnHourOrDays = Math.ceil(hoursLeft) + " hours ";
				$("#daysTill").append(returnHourOrDays);
				//var returnHourOrDays = hoursLeft + " hours "; 
				//var n = parseInt(returnHourOrDays);
				//var m = n.toFixed(1);
				//$("#daysTill").append(m);
				
			} 
			else 
			{
				var daysLeft = timeDifference / millesecondsInDay
				var returnHourOrDays = Math.ceil(daysLeft) + " days ";
				$("#daysTill").append(returnHourOrDays);
				//var returnHourOrDays = daysLeft + " days ";
				//var n = parseInt(returnHourOrDays);
				//var m = Math.ceil(n);
				//$("#daysTill").append(m);
			};
			return returnHourOrDays; 
		//}	
	
		itsChristmas(); 
		
	});

});//end #homepage 

$('#info').on('pageinit', function()
{
	//don't think there are any functions needed for this page
});//end #info

$('#find').on('pageinit', function()
{
	//this is still under construction
});	//end #find 



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

$('#addGift').on('pageinit', function()
{
	//want this page to be the edit page, but it might not end up that way...
	
});	//end #addGift

$('#addPerson').on('pageinit', function()
{
	var saveList = $('.save').on('click', function(key)	
	{
		console.log("You gots to save!");
		var keyValue = Math.floor(Math.random()*100001);
		
		var boughtID = function()
		{
			if ($("#budget").val() == "on")
			{
				var boughtValue = "Bought"; 
			}	
			else
			{
				var boughtValue = "WishList"; 
			}
			return boughtValue; 
		};
		
		var typeID = function()
		{
			if ($("#type").val() == "on")
			{
				var typeValue = "Naughty"; 
			}	
			else
			{
				var typeValue = "Nice"; 
			}
			return typeValue;
		};
		
		var myData			= { 
		//used the returns from the functions and set those as the variables for these arrays.
			key			: [keyValue],
			name	 	: ["Name: ", $("#name").val()],
			giftIdeas 	: ["Gift Ideas: ", $("#giftIdeas").val()],
			budget	 	: ["Budget: ", $("#budget").val()],
			bought	 	: ["Bought: ", boughtID()],
			type		: ["On List: ", typeID()],
		};
		//Save data into Local Storage: use Stringify to convert our object to a string by using JSON.stringify
		localStorage.setItem(keyValue, JSON.stringify(myData)); 
		//console.log(localStorage); 
		alert("Your list is saved");
		window.location.reload("#homepage");
		
	}); //saveList

	var clearList = $(".delete").click(function()
	{
        if(localStorage.length === 0)
        {
            alert("You have no lists saved.");
            window.location.reload("#homepage");
        } 
        else 
        {
            var confirmClear = confirm("Are you sure you want to delete all saved list(s)?");
            if (confirmClear) 
            {
                localStorage.clear();
                alert("You have successfully cleared all saved list(s)!");
                $.mobile.changePage('#homepage');
                window.location.reload();
            } 
            else 
            {
                alert("Your saved list(s) have not been deleted!");
                window.location.reload();
            };
        };
    }); // end clearList
	
});	//end #addPerson

$('#viewList').on('pageinit', function()
{		
	//var naughtyXML = $('#naughtyList').on('click', function(key){};
	//eventually I need to change this to only display the NAUGHTY LIST and have it in the naughty list section
	$("#naughtyDisplay").append("<ul class='NaughtyList'></ul>")
		for (var i = 0, f = localStorage.length; i < f; i++) 
		{
			var naughtyID 		= localStorage.key(i);
        	var naughtyValue 	= localStorage.getItem(naughtyID);
        	var naughtyInfo	 	= JSON.parse(naughtyValue);
        	
        	var naughtyNames = $("<li></li>");
        	var naughtyNamesInfo = 
        	$(
        		"<h4>" + naughtyInfo.name[1] + "</h4>" +
        		"<p>" + naughtyInfo.giftIdeas[1] + "</p>" + 
        		"<p>" + naughtyInfo.budget[1] + "</p>" + 
        		"<p>" + naughtyInfo.bought[1] + "</p>" + 
        		"<p>" + naughtyInfo.type[1] + "</p>" +
        		"<button class='deletePerson' data-key=" + naughtyID + ">Delete This Person!</button>"
        		//"<button class='editPerson' data-key=" + naughtyID + ">Edit This Person!</button>"
        	);
        	$(".NaughtyList").append(naughtyNames)
        	naughtyNames.append(naughtyNamesInfo)
        };
		
		$("#naughtyDisplay").listview('refresh')
		
		$(".deletePerson").on("click", function ()
		{
			var confirmDelete = confirm("Double check! You are about to delete this person!");
            if (confirmDelete) {
                //Pulls the Key for selected item in Local Storage
                localStorage.removeItem($(this).attr('data-key'));
                alert("This person was successfully deleted from your list.")
                window.location.reload("#index");
            } else {
                alert("Your person was not deleted.");
                window.location.reload();
            }
            
    	});
    	
    
}); //end #viewList

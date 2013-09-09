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

$('#addPerson').on('pageinit', function()
{
  	//var showList = function()
	//{
			
			
	//} //end showList()
	
	var saveList = $('#save').on('click', function(key) 
	{
		//console.log("Hello World!"); 
		//If there is no key, this means this is a brand new item and we need a new key
		//$('#save').click(function(key) 
		//if(!key){
			var keyValue 			= Math.floor(Math.random()*100001);
		//	console.log("there is no key");
		//} else {
			//otherwise we will set the id (keyValue) to the existing key (key) so that it will save over the data. 
			//the key is the same key that's been passed along from the editSubmit event handler
			//to the validate function, and then passed here, into the submitInfo function
		//	keyValue			= key;
		//	console.log("KEY");
		//}
		//console.log(keyValue);
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
		
		var typeID = function ()
		{
			if ($("#type").val() == "on")
			{
				var typeValue = "Naughty";
			}
			else
			{
				var typeValue = "Nice";
			}
			return typeValue
		}
		
		var myData			= { 
		//used the returns from the functions and set those as the variables for these arrays.
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

	}); // end saveList 
	
	var clearList = $("#delete").click(function()
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
    
    /* editWorkout = function(workoutKey){    
        
        $.mobile.changePage('#newWorkout');
        
        //var workoutKey = this.id;
        var workoutInfo = localStorage.getItem(workoutKey);
        var workoutLibrary = JSON.parse(workoutInfo);
    
        $("#characterName").val(workoutLibrary.characterName[0]);
        $("#serverName").val(workoutLibrary.serverName[0]);
        $("#race").val(workoutLibrary.race[0]).selectmenu();
        $("#race").selectmenu('refresh');
        $("#class").val(workoutLibrary.toonClass[0]).selectmenu();
        $("#class").selectmenu('refresh');
        $("#role").val(workoutLibrary.role[0]).selectmenu();
        $("#role").selectmenu('refresh');
        $("#specialization").val(workoutLibrary.specialization[0]);
        $("#level").val(workoutLibrary.level[0]).slider('refresh');
        $("#itemLevel").val(workoutLibrary.itemLevel[0]);
        $("#professions").val(workoutLibrary.professions[0]);
        $("#extraInfo").val(workoutLibrary.extraInfo[0]);
        $("#keyStorage").val(workoutKey);
        
        $("#submitCharacter").val("Edit My Toon!");
        $("#submitCharacter").button('refresh');

    };
	*/
}); //end #addPerson
 

$('#addGift').on('pageinit', function()
{
	//code needed for home page goes here
	
});	//end #addGift

$('#viewList').on('pageinit', function()
{
	//code needed for home page goes here
	
});	//end #viewList
 




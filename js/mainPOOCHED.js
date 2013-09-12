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

/*$('#addPerson').on('pageinit', function()
{
  	//var showList = function()
	//{
			
			
	//} //end showList()
	
	var saveList = $('.save').on('click', function(key) 
	{
		console.log("Hello World!"); 
		//If there is no key, this means this is a brand new item and we need a new key
		//$('#save').click(function(key) 
		//if(!key){
			var keyValue = Math.floor(Math.random()*100001);
		//	console.log("there is no key");
		//} else {
			//otherwise we will set the id (keyValue) to the existing key (key) so that it will save over the data. 
			//the key is the same key that's been passed along from the editSubmit event handler
			//to the validate function, and then passed here, into the submitInfo function
		//	keyValue = key;
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

	}); // end saveList 
	
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
    
   
}); //end #addPerson
*/ 

$('#addGift').on('pageinit', function()
{
	

	
});	//end #addGift

/*
$('#viewList').on('pageinit', function(myData)
{
	$(".loadJSON").on("click", function(){
		console.log("Hola. Me encanta cantar y bailar");
        
		 $.ajax({
		    url: "xhr/data.json",
		    type: "GET",
		    dataType: "json",
		    success: function(niceList) {
				$.each(niceList, function(index, singleList)
				{
			   	 	var key = Math.floor(Math.random()*100001);
			    	var storeList = JSON.stringify(singleList);
			    	localStorage.setItem(key, storeList)
			    	console.log("Saved item " + singleList + " to Local Storage with a ID of: " + key)
				})
				alert ("Your nice list (json) has been saved!");
				//console.log("wonky wonky");
				window.location.reload();
		    },
		    error: function(error, errorparse){
				console.log(error, errorparse)
		    }
		});
        
	});
    
    $(".loadXML").on("click", function(){
        console.log("Hola. Yo tengo cinco perros.");
      $.ajax({
            url: "xhr/data.xml",
            type: "GET",
            dataType: "xml",
            success: function(naughtyListXML) {
                $('naughtyList', naughtyListXML).each(function(){
                    var key = Math.floor(Math.random()*1000000000);
                    var storeList = {
                        name  			:[$("name", this).text()],
                        giftIdeas     	:[$("giftIdeas", this).text()],
                        budget          :[$("budget", this).text()],
                        bought      	:[$("bought", this).text()],
                        type          	:[$("type", this).text()],
                    }
                    localStorage.setItem(key, JSON.stringify(storeList))
                    console.log(storeList)
                });
                alert ("Your naughty list (xml) has been saved!");
                window.location.reload();
            },
            error: function(error, errorparse){
                console.log(error, errorparse)
            }
        });
        
    });
   
	
	//how to display the json and xml data that is auto saved....????
	
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
        		"<button class='editPerson' data-key=" + naughtyID + ">Edit This Person!</button>"
        	)
		
		$(".deletePerson").on("click", function (){

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
      
		
		$("#naughtyDisplay").listview('refresh')
		
		$(".editPerson").on("click", function (){

        	var editList = function(listKey){    
        
        		$.mobile.changePage('#addGift'); //why changePage? 
        
        		var listKey = this.id;
        		var listInfo = localStorage.getItem(listKey);
        		var listLibrary = JSON.parse(listInfo);
    
        		$("#name").val(listLibrary.name[1]);
        		$("#giftIdeas").val(listLibrary.giftIdeas[1]);
        		$("#budget").val(listLibrary.budget[1]);
        		$("#bought").val(listLibrary.bought[1]);
        		$("#type").val(type.type[1]);
        		$("#keyStorage").val(listKey);
        
        		$("#edit").val("Edit My List!");
        		$("#edit").button('refresh');

			};
    	});
    	
    	$("#naughtyDisplay").listview('refresh')
    	
*/	
// this will be the code to grab local storage NICE LIST only! And have it display in the nice list section
/*
	var niceJSON = $('#niceList').on('click', function(key) 
	{
		$("viewList").append("<ul class='NiceList'></ul>")
		for (var i = 0, f = localStorage.length; i < f; i++) 
		{
			var niceID 		= localStorage.key(i);
        	var niceValue 	= localStorage.getItem(niceID);
        	var niceInfo	= JSON.parse(niceValue);
        	
        	if (niceInfo.type.val() == "off")
        	{
        		//display data
        	}
        	//else do nothing but continue the loop
		}
	
	});
*/	
/*	
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
    
	
});	//end #viewList
*/




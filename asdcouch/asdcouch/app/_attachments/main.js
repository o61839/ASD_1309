//Jenney Grover
//ASD 1309
//Christmas List
//September 2013

$(document).on("pageinit", "#homepage", function()
{
	console.log("Whoa stop dude!");
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

$(document).on("pageinit", "#info", function()
{
	//don't think there are any functions needed for this page
});//end #info

$(document).on("pageinit", "#find", function()
{
	//this is still under construction
});	//end #find 

$(document).on("pageinit", "#addGift", function()
{
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
    
     //need to do the cool code thinger with the key
    var saveList = $('.save').on('click', function()	
	{
		//console.log("Hello World!"); 
		//If there is no key, this means this is a brand new item and we need a new key
		//$('#save').click(function(key) 	
		
		var alreadyKey = $("#keyStorage").val(); 
		
		if(!alreadyKey){
			var keyValue = Math.floor(Math.random()*100001);
		//	console.log("there is no key");
		} else {
			//otherwise we will set the id (keyValue) to the existing key (key) so that it will save over the data. 
			//the key is the same key that's been passed along from the editSubmit event handler
			//to the validate function, and then passed here, into the submitInfo function
			keyValue = alreadyKey;
		//	console.log("KEY");
		}
		//console.log(keyValue);
		
		//console.log("You gots to save!");
		//var keyValue = Math.floor(Math.random()*100001);
		
		var boughtID = function()
		{
			if ($("#boughtEdit").val() == "on")
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
			if ($("#typeEdit").val() == "on")
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
			name	 	: ["Name: ", $("#nameEdit").val()],
			giftIdeas 	: ["Gift Ideas: ", $("#giftIdeasEdit").val()],
			budget	 	: ["Budget: ", $("#budgetEdit").val()],
			bought	 	: ["Bought: ", boughtID()],
			type		: ["On List: ", typeID()],
		};
		//Save data into Local Storage: use Stringify to convert our object to a string by using JSON.stringify
		localStorage.setItem(keyValue, JSON.stringify(myData)); 
		//console.log(localStorage); 
		alert("Your list is saved");
		window.location.reload("#homepage");
		
	}); //saveList
	
});	//end #addGift

$(document).on("pageinit", "#addPerson", function()
{
	//QUESTION: don't I need a click function? 
	
	function saveData()	
	{	
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
			key			= _id,
			rev			= _rev,
			name	 	= $("#name").val(),
			giftIdeas 	: ["Gift Ideas: ", $("#giftIdeas").val()],
			budget	 	: ["Budget: ", $("#budget").val()],
			bought	 	: ["Bought: ", boughtID()],
			type		: ["On List: ", typeID()],
		};
		//Save data into Local Storage: use Stringify to convert our object to a string by using JSON.stringify
		//localStorage.setItem(keyValue, JSON.stringify(myData)); 
		//console.log(localStorage);
		$.couch.db('christmaslist').saveDoc(myData, function(){
			success: function(myData){
				console.log("Ho Ho Ho, the list has been second checked: " + myData); 
			}
			error: function (){
				console.log("Cricky, the list is not saved."); 
			}
		
		})
		 
		alert("Your list is saved");
		window.location.reload("#homepage");
		
	}; //saveList

	function deleteData(key){
		$.couch.db('christmaslist').removeDoc(key, function(){
			success: function(myData){
				console.log("Ho Ho Oh no, the list has been deleted."); 
			},
			error: function (){
				console.log("Ho Ho Ho your list is safe with the elves."); 
			}
		}
    }); // end deleteData
    
    $('.delete').on('click', function(){
    	var id = $(this).data('id'); 
    	var rev = $(this).data('rev'); 
    	//QUESTION: I don't understand how these are not ('_id') and ('_rev')?
    	
    	var key = {};
    	key._id = id
    	key._rev = rev; 
    	
    	deleteData(key); 
    })
	
});	//end #addPerson

$(document).on("pageinit", "#viewList", function()
{		
	//var naughtyXML = $('#naughtyList').on('click', function(key){};
	//eventually I need to change this to only display the NAUGHTY LIST and have it in the naughty list section
	$("#naughtyDisplay").append("<ul class='NaughtyList'></ul>");
		for (var i = 0, f = localStorage.length; i < f; i++) 
		{
			var naughtyID 		= localStorage.key(i);
        	var naughtyValue 	= localStorage.getItem(naughtyID);
        	var naughtyInfo	 	= JSON.parse(naughtyValue);
        	console.log(naughtyInfo);
        	var naughtyNames = $("<li class-"' + naughtyID + '"></li>");
        	var naughtyNamesInfo = 
        	$(
        		"<h4>" + naughtyInfo.name[1] + "</h4>" +
        		"<p>" + naughtyInfo.giftIdeas[1] + "</p>" + 
        		"<p>" + naughtyInfo.budget[1] + "</p>" + 
        		"<p>" + naughtyInfo.bought[1] + "</p>" + 
        		"<p>" + naughtyInfo.type[1] + "</p>" +
        		"<button class='deletePerson' data-key=" + naughtyID + ">Delete This Person!</button>"
        	);
        	
        	$(".NaughtyList").append(naughtyNames);
        	
        	//naughtyNames.append(naughtyNamesInfo);
        	$("li."+naughtyID).append(naughtyNamesInfo);
        	
        	var editLink = $("<a href='#' class='editList' id=" + naughtyID + ">Edit This Person!</a>");
        	editLink.html(naughtyNamesInfo);
        	naughtyNames.append(editLink).appendTo("#naughtyDisplay");
        
        	editLink.on('click', function() {
            	var listKey = this.id
            	editList(listKey)
            //console.log("My ID is: " + listKey);
       		});
        };
		
		$("#naughtyDisplay").listview('refresh');
		
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
    	
    	var editList = function(listKey){    
        
        	$.mobile.changePage('#addGift'); //why changePage? 
        
        	//var listKey = this.id;
        	var listInfo = localStorage.getItem(listKey);
        	var listLibrary = JSON.parse(listInfo);
    
    		var purchased = listLibrary.bought[1]; 
    		var list = listLibrary.type[1];
    		
    		if (purchased == "Bought") 
    		{
    			$("#boughtEdit").val("on");
    			$("#boughtEdit").slider('refresh');
    			
    		}
    		else
    		{
    			$("#boughtEdit").val("off");
    			$("#boughtEdit").slider('refresh');
    		}
    		
    		if (list == "Naughty") 
    		{
    			$("#typeEdit").val("on");
    			$("#typeEdit").slider('refresh');
    		}
    		else
    		{
    			$("#typeEdit").val("off");
    			$("#typeEdit").slider('refresh');
    		}
    		
        	$("#nameEdit").val(listLibrary.name[1]);
        	$("#giftIdeasEdit").val(listLibrary.giftIdeas[1]);
        	$("#budgetEdit").val(listLibrary.budget[1]);
        	$("#keyStorage").val(listKey);
        
        		//$(".edit").val("Edit My List!");
        		//$(".edit").button('refresh');

		};
		
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
	
    
}); //end #viewList

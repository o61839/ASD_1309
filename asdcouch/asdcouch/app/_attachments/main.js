$(document).ready(function() {
	$.ajax({
		"url" :	"_view/list",
		"dataType" : "json", 
		"success" : function(data) {
			$.each(data.rows, function(index, list) {
				var name = list.value.name; 
				var giftIdeas = list.value.giftIdeas; 
				var budget = list.value.budget; 
				var bought = list.value.bought; 
				var type = list.value.type;
				var id = list._id; 

				
				$("#naughtyDisplay").append(
					$('<li>').append(
						$('<a>').attr("href", "#")
							.text(name)
					)
				)
				
				$("#naughtyDisplay li").append(
					$('<p>').text(giftIdeas)
				)
				
				$("#naughtyDisplay li").append(
					$('<p>').text(budget)
				)
				
				$("#naughtyDisplay li").append(
					$('<p>').text(bought)
				)
				
				$("#naughtyDisplay li").append(
					$('<p>').text(type)
				)
				
			});
			$("#naughtyDisplay").listview('refresh');
		}
	});
});
function(doc) {
  if (doc.type === "naughty") {
    emit(doc._id, {
    	"name" 		: doc.name, 
    	"giftIdeas" : doc.giftIdeas, 
    	"budget"	: doc.budget,
    	"bought"	: doc.bought,
    	"type"		: doc.type
    });
  }
};
var data = require("../users.json");


exports.addFriend = function(request, response) {    
	// Your code goes here
		var newFriend = {'name': request.query.name,
						'password': 'password',
						'growth': '0',
						'isUser': false};
		// json object (newFriend) is created
		data.users.push(newFriend);
		response.render('friends', data);
}
 
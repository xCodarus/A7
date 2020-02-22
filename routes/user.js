var data = require('../users.json');

exports.userInfo = function(request, response) { 
	for (i=0; i < data.users.length; i++) {
		if (data.users[i].isUser == true) {
			var user = data.users[i];
		}
	console.log(user);
  	response.json(user);
  }
}
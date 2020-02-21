var data = require('../users.json');

exports.view = function(req, res){
	for (i=0; i < data.users.length; i++) {
		if (data.users[i].isUser == true) {
			var user = data.users[i];
			res.render('sip', user);
			break;
		} 
	}
	res.render('sip');
};
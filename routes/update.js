var data = require("../users.json");

//function _isContains(json, value) {
//    let contains = false;
//    Object.keys(json).some(key => {
//        contains = typeof json[key] === 'object' ? _isContains(json[key], value) : json[key] === value;
//         return contains;
//    });
//    return contains;
// }

exports.updateSip = function(req, res) {
	for (i=0; i < data.users.length; i++) {
		if (data.users[i].isUser == true) {
			var tempGrowth = data.users[i].growth;
			if (tempGrowth < 8) {
				tempGrowth = tempGrowth + 1;
				data.users[i].growth = tempGrowth;
			}
			var user = data.users[i];
			res.json(user);
			break;
		} 
	}
	break;
}
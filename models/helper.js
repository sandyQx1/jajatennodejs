var exports = module.exports = {};

exports.validateToken = function(db,token,_results){
	var hasilObject = {};
	var checkToken = "select a.ses_id as sessionId, a.`ses_key` as token,a.ses_socket_key as socketId,a.ses_datetime_socket_connect as datetimeConnect,a.ses_datetime_socket_disconect as datetimeDisconnect,b.usr_id as userId,b.usr_username as userName,b.usr_phone_register as userPhoneNumber,c.mem_id as memberId,c.mem_screen_name as screenName from tbl_session a inner Join tbl_user b ON b.usr_id = a.ses_usr_id inner Join tbl_member c ON c.mem_usr_id = a.ses_usr_id where a.ses_key = '"+token+"' Order by ses_id DESC  LIMIT 1";

	//console.log(checkToken);
	db.query(checkToken, function (error, results, fields) {
	  	if (error) throw error;

	  	if(results.length > 0 ){
	  		for(var i in results){
				hasilObject.sessionId 			= results[i].sessionId;
				hasilObject.token 				= results[i].token;
				hasilObject.socketId 			= results[i].socketId;
				hasilObject.datetimeConnect 	= results[i].datetimeConnect;
				hasilObject.datetimeDisconnect  = results[i].datetimeDisconnect;
				hasilObject.userId 				= results[i].userId;
				hasilObject.userName 			= results[i].userName;
				hasilObject.userPhoneNumber 	= results[i].userPhoneNumber;
				hasilObject.memberId 			= results[i].memberId;
				hasilObject.screenName 			= results[i].screenName;
				_results(hasilObject);
			}
	  	}else{
	  		_results(hasilObject);
	  	}
		
	});
}


exports.Rocker = function(name, age) {
	console.log('rae');
    this.name = name;
    this.age = age;
    this.about = function() {
    	var object = {id:"1"};
       	 return object;
    };
};


exports.resultToken = function(db,token,_results){
	var hasilObject = {};
	this.db = db;
	var checkToken = "select a.ses_id as sessionId, a.`ses_key` as token,a.ses_socket_key as socketId,a.ses_datetime_socket_connect as datetimeConnect,a.ses_datetime_socket_disconect as datetimeDisconnect,b.usr_id as userId,b.usr_username as userName,b.usr_phone_register as userPhoneNumber,c.mem_id as memberId,c.mem_screen_name as screenName from tbl_session a inner Join tbl_user b ON b.usr_id = a.ses_usr_id inner Join tbl_member c ON c.mem_usr_id = a.ses_usr_id where a.ses_key = '$2y$10$q.rjZhVvAz2aF7zGhBJeb.G85T81.AjVJ1bvcT.h0XgulyW3MKRUu' Order by ses_id DESC  LIMIT 1";

	//console.log(checkToken);
	this.db.query(checkToken, function (error, results, fields) {
	  	if (error) throw error;
		for(var i in results){
			hasilObject.sessionId 			= results[i].sessionId;
			hasilObject.token 				= results[i].token;
			hasilObject.socketId 			= results[i].socketId;
			hasilObject.datetimeConnect 	= results[i].datetimeConnect;
			hasilObject.datetimeDisconnect  = results[i].datetimeDisconnect;
			hasilObject.userId 				= results[i].userId;
			hasilObject.userName 			= results[i].userName;
			hasilObject.userPhoneNumber 	= results[i].userPhoneNumber;
			hasilObject.memberId 			= results[i].memberId;
			hasilObject.screenName 			= results[i].screenName;
			_results = hasilObject;
			
		}
	});
}
// function foo(address, fn){
//   geocoder.geocode( { 'address': address}, function(results, status) {
//      fn(results[0].geometry.location); 
//   });
// }

// foo("address", function(location){
//   alert(location); // this is where you get the return value
// });

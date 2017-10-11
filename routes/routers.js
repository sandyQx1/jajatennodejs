var express = require('express');
var pushNotification        = require('./../controllers/pushNotificationController');
//var notes = require('./controller/notesController');

module.exports = function(app, express,io) {
 	//console.log(io);
 	var router 	= express();
	//api/v1/user

 	router.route('/push-notification').post(pushNotification.sendPushNotif);

// // api/v1/user/create
//  router.route('/user/create')
//  .post(user.create);
 
// // api/v1/user/create
//  router.route('/user/update')
//  .post(user.update);

// // api/v1/user/:name
//  router.route('/user/:name')
//  .get(user.findByName);

 
 // api/v1/user
 //router.route('/notes/list').get(notes.list);
	return router;
};
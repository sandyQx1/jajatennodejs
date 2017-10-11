var request     = require('request');
var exports     = module.exports = {};
var countDeviceIos          = 0;
var countDeviceAndroid      = 0;
var countDeviceBrowser      = 0;
var socketCount             = 0;
var onlineDeviceIos         = 0;
var onlineDeviceAndroid     = 0;
exports.checkToken = function(object, callBackThisFunction){
    //console.log(this);
    var handshakeData       = object.socket.request;// geting all request on socket
    var stringDeviceType    = 'Unknow';
    object.redisClient.hget('token_'+object.token,'data', function(error, resultRedis) {
        //console.log('token = '+object.token);
        //return false;
        result = false;
        data   = {};
        if(resultRedis){
            resultData = JSON.parse(resultRedis);
            result = true;
            //console.log('**************************');
            //console.log(resultRedis);
            //console.log(resultData);
            //console.log('**************************');
            //console.log('checkToken = '+object.token+' socketId='+object.socketId+' memberId = '+resultData.memberId+' deviceTypeId = '+resultData.deviceTypeId);
            //console.log('START deviceTypeId = '+resultData.deviceTypeId+' socketsConnected='+object.socketsConnected+' countDeviceIos = '+countDeviceIos+' countDeviceAndroid='+countDeviceAndroid+' countDeviceBrowser = '+countDeviceBrowser);
            socketCount++;
            
            if(resultData.deviceTypeId == 1){
                countDeviceIos++;
                stringDeviceType    = 'IOS';
                //console.log(stringDeviceType);
            }
            if(resultData.deviceTypeId == 2){
                countDeviceAndroid++;
                stringDeviceType    = 'ANDROID';
                //console.log(stringDeviceType);
            }
            if(resultData.deviceTypeId == 3){
                countDeviceBrowser++;
                stringDeviceType     = 'BROWSER';
                //console.log(stringDeviceType);
            }
            deviceCount         = {
                                    countSocketActive   : object.countSocketActive,
                                    countDeviceIos      : countDeviceIos,
                                    countDeviceAndroid  : countDeviceAndroid,
                                    countDeviceBrowser  : countDeviceBrowser,
                                    onlineDeviceIos     : onlineDeviceIos,
                                    onlineDeviceAndroid : onlineDeviceAndroid,
                                  };
            socketAction        = 1;
            object.sessionStatus= 'Connect'
            socketStatus        = {
                                    socketAction        : socketAction,
                                    socketId            : object.socketId,
                                    stringDeviceType    : stringDeviceType,
                                    token               : resultData.tokenKey,
                                    userName            : resultData.userName,
                                    userId              : resultData.userId,
                                    memberId            : resultData.memberId,
                                    memberScreenName    : resultData.screenName,
                                    deviceName          : object.deviceName,
                                    sessionStatus       : object.sessionStatus,
                                  };
            objectEmitConnectionCount   = {
                                            clientsCount    : object.socketsConnected,
                                            socketCount     : socketCount,
                                            deviceCount     : deviceCount,
                                            socketStatus    : socketStatus
                                          };

            data = {
                    resultRedis                 : JSON.parse(resultRedis),
                    objectEmitConnectionCount   : objectEmitConnectionCount
                    };
            //console.log('########################');
            //console.log(objectEmitConnectionCount);
            //console.log('########################');
            //console.log('END deviceTypeId = '+resultData.deviceTypeId+' socketsConnected='+object.socketsConnected+' countDeviceIos = '+countDeviceIos+' countDeviceAndroid='+countDeviceAndroid+' countDeviceBrowser = '+countDeviceBrowser);

        }

        objectCallBack = {
                            result:result, 
                            data:data
                        };
        callBackThisFunction(objectCallBack);
    }); 
}

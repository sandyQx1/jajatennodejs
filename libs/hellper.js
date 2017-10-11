var request     = require('request');
var exports     = module.exports = {};

exports.curl = function(object,callBackThisFunction){
    //console.log('CURL Step 1');
    if(object.url!=undefined) {
        if(object.method!=undefined) {
            if(object.request!=undefined) {
                
                request({
                         url    : object.url,
                         method : object.method,
                         form   : object.request,
                         json   :true,
                         headers: {
                                    'Accept': 'application/json',
                                    'Accept-Charset': 'utf-8',
                                    'User-Agent': 'nodejs-socket-client'
                                }
                        },  
                        function(error,response,body){
                            //console.log('CURL Step 2');
                            //console.log(response);
                            var result  = false;
                            var message = 'invalid curl';
                            var data    = {};
                            if(!error){
                                //console.log('CURL Step 3');
                                //console.log('body = '+body.return);
                                if(body.return == true){
                                    //console.log('CURL Step 4');
                                    result  = true;
                                    message = 'Success';
                                    data    = body.data;

                                }else{
                                    //console.log('CURL Step 5');
                                    message = body.msg;
                                    //console.log(body);
                                    //console.log('CURL URL ='+object.url);
                                    //console.log(object.request);
                                }
                            }else{
                                //console.log('CURL Step 6');
                                message = 'error crl';
                            }
                            var resultObject = {
                                            result  : result,
                                            msg     : message,
                                            data    : data,
                                           };

                            callBackThisFunction(resultObject);
                            // console.log('========================================================================');
                            // console.log(object);
                            // console.log(resultObject);
                            // console.log('========================================================================');
                        }
                );
            }
        }
    }
}

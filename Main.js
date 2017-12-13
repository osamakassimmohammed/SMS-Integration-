
function SMSTOUSERS(){
var accountSid = 'AC79a898de055f4848e78dd51a9fe36516'; // Your Account SID from www.twilio.com/console
var authToken = 'a5465b9d27b7f2f262591428e83fdaed';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello Mano This is Osama (:',
    //to: '+966557730782',
	to: '+966592688256',
    from: '+18505839282 ',
})
.then((message) => console.log(message.sid));

console.log("Dome")
};


SMSTOUSERS();
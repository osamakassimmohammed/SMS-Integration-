
function SMSTOUSERS(){
var accountSid = ''; // Your Account SID from www.twilio.com/console
var authToken = '';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello  This is Osama (:',
    //to: '+',
	to: '+',
    from: '+ ',
})
.then((message) => console.log(message.sid));

console.log("Dome")
};


SMSTOUSERS();

require('dotenv').config();
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilio = require('twilio');
let twilioClient = new twilio(accountSid, authToken);
let recipient = process.env.RECIPIENT;
let sender = process.env.SENDER;

const quoteLibrary = require('inspirational-quotes');

twilioClient.messages.create({
    body: 'Coucou',
    to: recipient,
    from: sender,
})
.then((message) => console.log(message.sid));





//start the node server
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Super Texter has started!');
});
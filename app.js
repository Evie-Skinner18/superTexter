require('dotenv').config();
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilio = require('twilio');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
let twilioClient = new twilio(accountSid, authToken);
let recipient = process.env.RECIPIENT;
let sender = process.env.SENDER;

const express = require('express');
const app = express();

const quoteLibrary = require('inspirational-quotes');
let quote = quoteLibrary.getQuote();
console.log(`Today's quote is from the great ${quote.author}: ${quote.text}`);

app.post('/sms', (req, res) => {
    let twimlResponse = new MessagingResponse();
    twimlResponse.message(`Today's quote is from the great ${quote.author}: ${quote.text}`);
    
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twimlResponse.toString());
});

// twilioClient.messages.create({
//     body: `Today's quote is from the great ${quote.author}: ${quote.text}`,
//     to: recipient,
//     from: sender,
// })
// .then((message) => console.log(message.sid));





//start the node server
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Super Texter has started!');
});
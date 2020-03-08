require('dotenv').config();
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const express = require('express');
const app = express();
const quoteLibrary = require('inspirational-quotes');

app.post('/sms', (req, res) => {
    let twimlResponse = new MessagingResponse();
    let quote = quoteLibrary.getQuote();
    console.log(`Today's quote is from the great ${quote.author}: "${quote.text}"`);

    twimlResponse.message(`Today's quote is from the great ${quote.author}: ${quote.text}`);
    
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twimlResponse.toString());
});





// start the node server
const port = process.env.PORT || 1337;
app.listen(port, function () {
  console.log('Super Texter has started!');
});
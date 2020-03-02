require('dotenv').config();






//start the node server
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Super Texter has started!');
});
let fetch = require('node-fetch');
let fs = require('fs');
const FormData = require("form-data");
const formData = new FormData();

formData.append('image', fs.createReadStream('capture.png'),"capture.png");

fetch("https://m98.be/guess-mixed-color/send.php", {
  method: 'POST',
  body: formData
});
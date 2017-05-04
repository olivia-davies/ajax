// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";
// @codekit-prepend "airtable.js";

//console.log('Hello, World!');
////$("#data").load('/data/data.txt');


//Configure/Handshake with AirTable
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyq0nsM8nVkKQneU'
});
var base = Airtable.base('appQO9Vc7jxoDG317');
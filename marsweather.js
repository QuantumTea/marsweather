const fs = require('fs')

// use readFileSync to force it to read it NOW
var fromFile = fs.readFileSync('./mars_weather.json', 'utf8', err => {
    if (err) {
        console.log("Oh noes! no such file");
        return console.log(err);
    } else {
        console.log("File exists");
    }
})

//console.log(fromFile)
var jsonObject = JSON.parse(fromFile)
console.log("On sol: " + jsonObject.report.sol + "the max temp was: " + jsonObject.report.max_temp + "C")
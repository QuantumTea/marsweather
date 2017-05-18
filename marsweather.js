const fs = require('fs')

// use readFileSync to force it to read it NOW
var fromFile = fs.readFileSync('./mars_weather.json', 'utf8', err => {
    if (err) {
        console.log("Oh no! No such file");
        return console.log(err);
    } else {
        console.log("File exists");
    }
})

var jsonObject = JSON.parse(fromFile)
//console.log(jsonObject)
console.log("\nOn Martian sol " + jsonObject.report.sol 
	+ " the max temp was " + jsonObject.report.max_temp + " Celsius")

console.log("Martian sol " + jsonObject.report.sol 
	+ " equates to Earth date: " + jsonObject.report.terrestrial_date + "\n")

const express = require('express');
const bodyParser = require('body-parser');
const e = require('express');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {

    console.log(req.body);
    var height = req.body.height;
    var weight = req.body.weight;
    var BMI = Math.round(weight / (height * height));
    res.send("Your BMI is " + BMI + ".");
})

app.get("/calculator", function (req, res) {
    res.sendFile(__dirname + "/calculator.html");
});

app.post("/calculator", function (req, res) {
    var num1 = req.body.num1;
    console.log(typeof (num1));
    console.log(typeof (num1 = Number(num1)));
    var num2 = req.body.num2;
    num2 = Number(num2);
    var operator = req.body.operator;
    var result;
    if (operator == '+') {
        result = num1 + num2;
    }
    else if (operator == '-') {
        result = num1 - num2;
    }
    else if (operator == '*') {
        result = num1 * num2;
    }
    else if (operator == '/') {
        result = num1 / num2;
    }
    else {
        res.sendStatus('please enter a valid operator: +, -, *, /');
    }
    res.sendStatus(result);
})
app.listen(3000, function (req, res) {
    console.log("server is running on port 3000.");
});
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;

function middleware1(req, res, next) {
  console.log("Called from inside Middleware1" + req.headers.counter);
  next();
}

// app.use(middleware1);
app.use(bodyParser.json());

function calculateMul(counter) {
  let answer = 1;
  for (let i = 1; i <= counter; i++) {
    answer *= i;
  }
  return answer;
}

function calculateSum(counter) {
  let sum = 0;
  for (let i = 1; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/Page1", (req, res) => {
  let counter = req.query.counter;

  let calculatedSum = calculateSum(counter);
  let calculatedMul = calculateMul(counter);

  let answerObject = {
    sum: calculatedSum,
    mul: calculatedMul,
  };

  res.status(200).send(answerObject);
});

app.post("/createUser", (req, res) => {
  res.send("Hello Guys!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

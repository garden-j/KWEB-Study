const express = require("express");
const app = express();
const port = 3000;

// Exercise 3.1

app.use(express.urlencoded({ extended: true }));

function stringify(obj) {
  return Object.keys(obj)
    .map((k) => `${k}: ${obj[k]}`)
    .join("\n");
}

// GET 요청: query string 처리
app.get("/", (req, res) => {
  res.send(stringify(req.query));
});

// POST 요청: body 데이터 처리
app.post("/", (req, res) => {
  res.send(stringify(req.body));
});

// PUT 요청: body 데이터 처리
app.put("/", (req, res) => {
  res.send(stringify(req.body));
});

// DELETE 요청: body 데이터 처리
app.delete("/", (req, res) => {
  res.send(stringify(req.body));
});

// 서버 실행
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Exercise 3.2

app.get("/board/page/:page", (req, res) => {
  res.send(`This is page #${req.params.page}`);
});

// Exercise 3.3

app.get("/factorial", (req, res) => {
  const num = req.query.number;
  res.redirect(`/factorial/${num}`);
});

function factorial(num) {
  if (num == 1) return 1;
  return num * factorial(num - 1);
}

app.get("/factorial/:number", (req, res) => {
  const num = req.params.number;
  res.send(factorial(num));
});

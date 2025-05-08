/*
Exercise 3.4: Login Server with form Tag
47쪽의 Code 3.13을 참고하여 로그인할 수 있는 웹 페이지를 응답하는 GET / 라우트와 로그인 페이지에서 받은
username과 password 값을 텍스트로 응답하는 POST /login 라우트의 controller를 구현하여라. 이때 사용자로
부터 body 데이터를 제대로 받기 위해서 Code 3.14와 같이 미들웨어를 설정하여라.
*/

const express = require("express");
const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
  <form method="post" action="/login">
  <div>
  <label>Username:</label>
  <input id="username-input" name="username" type="text">
  </div>
  <div>
  <label>Password:</label>
  <input id="password-input" name="password" type="password">
  </div>
  <div>
  <div>Introduce yourself</div>
  <textarea id="introduction-input" name="introduction"></textarea>
  </div>
  <button type="submit">Submit</button>
  </form>
    `);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  res.send(`username: ${username}\npassword: ${password}`);
});

app.listen(port, () => {
  console.log(`Server running at port ${port}!!`);
});

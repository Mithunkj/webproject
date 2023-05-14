const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.write("<h1>welcome to my home page<h1>");
  res.write("<h1>welcome to my home second line<h1>");
  res.send();
});
app.get("/about", (req, res) => {
  res.status(200).send("welcome to about page");
});
//On using status(), we are actually checking it's status first than sending some response which is a good practice , and  on using  send() ,we r  sending response directly i.e. what to show on the page ,So in case of an error we can send a message as response on using status () which is the benefit of this
app.get("/contact", (req, res) => {
  res.send("welcome to countct page");
});

// app.get("/temp", (req, res) => {
//   res.send([
//     {
//       id: 1,
//       name: "Mithun",
//     },
//     {
//       id: 1,
//       name: "Mithun",
//     },
//     {
//       id: 1,
//       name: "Mithun",
//     },
//   ]);
// });

app.get("/temp", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Mithun",
    },
    {
      id: 1,
      name: "Mithun",
    },
    {
      id: 1,
      name: "Mithun",
    },
  ]);
});
//difrence of res.send and res.json
//1) res.send this method identical object or array is pass but res.json will also convert nonobjects ,such as null and undiffined which are not valid JSON
//2) res.send(200); returns source code and res.json(200); returns object
//3)  res.json({'content-type' :'application.json'});and res.send({'content-type':'text.html'})

app.listen(PORT, () => {
  console.log(`listening to the port no ${PORT}`);
});

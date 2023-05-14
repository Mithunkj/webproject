// const express = require("express");
// const app = express();

// //app.get(route,callback)
// app.get("/", (req, res) => {
//   res.send(" hellow world from the mithun");
// });
// app.get("/about", (req, res) => {
//   res.send("hello world from about page");
// });

// //app.listen(port, callback);
// app.listen(8000, () => {
//   console.log("listing the port at 8000");
// });

// // website https://expressjs.com/en/starter/static-files.html
// //how to serve the statice website
// const path = require("path");
// const express = require("express");
// const app = express();

// //console.log(path.join(__dirname, "../public"));
// const staticPath = path.join(__dirname, "../public");
// //bultin middleware
// app.use("/static", express.static(staticPath));
// //app.use(express.static(staticPath));  //home page can write

// //app.get(route,callback)
// app.get("/", (req, res) => {
//   res.send(" hellow world from the mithun");
// });
// app.get("/about", (req, res) => {
//   res.send("hello world from about page");
// });

// //app.listen(port, callback);
// app.listen(8000, () => {
//   console.log("listing the port at 8000");
// });

// website https://expressjs.com/en/starter/static-files.html
//how to serve the statice website
const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const requests = require("requests");

//console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
//bultin middleware
app.use("/static", express.static(staticPath));
//app.use(express.static(staticPath));  //home page can write

//to set the view engine hbs start
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

//template engine route
app.get("/", (req, res) => {
  res.render("index", {
    channelName: "mithun",
  }); //index.hbs
});
// app.get("/about", (req, res) => {
//   //res.render("about");
//   requests(
//     `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&unites=metric&appid=8b693fac77640e1a4f6293e677e139a4`
//   )
//     .on("data", (chunk) => {
//       const objdata = JSON.parse(chunk);
//       const arrData = [objdata];
//       console.log(
//         `city name is ${arrData[0].name} and the temp is ${arrData[0].main.temp}`
//       );
//       res.write(arrData[0].name);
//     })
//     .on("end", (err) => {
//       if (err) return console.log("connection closed due to errors", err);

//       console.log("end");
//     });
// });

//error page * is spechal charecter in express js
app.get("/about/*", (req, res) => {
  res.render("404", {
    errorcomemnt: "Opps page about us page couldn't be found",
  });
});
app.get("*", (req, res) => {
  res.render("404", {
    errorcomemnt: "Opps page couldn't be found",
  });
});
//hbs start end

//app.get(route,callback)
// app.get("/", (req, res) => {
//   res.send(" hellow world from the mithun");
// });

//app.listen(port, callback);
app.listen(8000, () => {
  console.log("listing the port at 8000");
});

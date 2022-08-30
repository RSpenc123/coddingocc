require("dotenv").config();
const express = require("express");
const massive = require("massive");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const session = require("express-session");
const UserCTRL = require("./userController");

const auth = require("./authmiddleware");
const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db up my guy");
});

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60
    }
  })
);

app.post("/auth/register", UserCTRL.register);




const port = SERVER_PORT;
app.listen(port, () => console.log(`we up on ${port} baby!`));
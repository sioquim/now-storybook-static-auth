// Refer to https://github.com/wzulfikar/now-static-auth-node
const protect = require("static-auth");

const AUTH_USERS = process.env.AUTH_USERS;

const app = protect(
  "/",
  (user, pass) => AUTH_USERS.includes(`${user}:${pass}`),
  {
    directory: __dirname + "/public"
  }
);
module.exports = app;

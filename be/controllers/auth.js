const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/user");

module.exports.postLogin = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username: username })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ error: "Incorrect username or password." });
      }

      return bcrypt.compare(password, user.password).then((match) => {
        if (match) {
          const userData = { userId: user._id.toString() };
          const accessToken = jwt.sign(
            userData,
            process.env.ACCESS_TOKEN_SECRET
          );
          return res.json({ accessToken: accessToken });
        }
        return res
          .status(401)
          .json({ error: "Incorrect username or password." });
      });
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(500)
        .json({ error: "Something went wrong with the server." });
    });
};

module.exports.postSignup = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username: username })
    .then((user) => {
      if (user) {
        return res.status(409).json({
          error: `A user with the username '${username}' already exists.`,
        });
      }

      return bcrypt.hash(password, 10).then((hashedPassword) => {
        const user = new User({ username: username, password: hashedPassword });
        return user.save().then(() => {
          res
            .status(201)
            .json({ message: "A new user was successfully created." });
        });
      });
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(500)
        .json({ error: "Something went wrong with the server." });
    });
};

module.exports.getAuthenticated = (req, res, next) => {
  console.log(req.user);
  return res.json({ message: "hello world" });
};

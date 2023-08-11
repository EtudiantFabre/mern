require("dotenv").config();
const jwt = require("jsonwebtoken");


const createSecretToken = (userId) => {
  const secretKey = "Moh_is_good"; // Replace this with your actual secret key
  const token = jwt.sign({ id: userId }, secretKey, { expiresIn: "1h" });
  return token;
};

module.exports = { createSecretToken };
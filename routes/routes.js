const express = require("express");
// how to call router function
const Routes = express.Router();
// import proccess from controller
const userProccess = require("../controller/users/user");
const middleProccess = require("../controller/middleware/middleware");

Routes.post("/register", userProccess.register);
Routes.post("/login", userProccess.login);
Routes.put("/update/:id", userProccess.update);
Routes.delete("/delete/:id", userProccess.delete);

Routes.use("/", middleProccess.errorPage);

module.exports = Routes;

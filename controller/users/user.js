const User = require("../../model/User");
const Profile = require("../../model/Profile");

exports.register = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    // to make sure no one data similiar
    let findUser = await User.findOne({ username: username, email: email });
    if (findUser) {
      res.status(400).send({
        message: `Sorry the email or username has choosen, please choose the other one`,
        statusCode: 400,
      });
    } else {
      const userCreate = await User.create({ username, password, email });
      console.log(userCreate);
      // create data profile database with (foreign-key)
      const { user_id, first_name, last_name, full_name, umur, tanggal_lahir, gender, address } = req.body;
      const createProfile = await Profile.create({ user_id: userCreate.id, first_name, last_name, full_name, umur, tanggal_lahir, gender, address });
      console.log(createProfile);

      if (!username || !password || !email || !first_name || !last_name || !full_name || !umur || !tanggal_lahir || !gender || !address) {
        res.status(400).send({
          message: `Failed to Create Your Data`,
          statusCode: 400,
        });
      } else {
        res.send({
          message: `Successfull to Create Your Data`,
          resultData: createProfile,
          statusCode: 200,
        });
      }
    }
    // create data profile database with (foreign-key) end tags.
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  let findUser = await User.findOne({ username: username, password: password });
  if (!findUser) {
    res.status(400).send({ message: "Failed to login. Invalid Username or Password", statusCode: 400 });
  } else {
    try {
      let getProfile = await Profile.findOne({ user_id: findUser.id });
      if (findUser.password === password) {
        res.send({
          message: `Welcome ${findUser.username}`,
          sendData: { User_account: findUser, User_rofile: getProfile },
          statusCode: 200,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  }
};

exports.update = async (req, res) => {
  let updateUser = await User.updateOne(
    {
      _id: req.params.id,
    },
    {
      $set: {
        email: "SDSDSDSDSD",
      },
    }
  );
  try {
    if (updateUser) {
      res.send({
        message: `Successfull to update user`,
        sendData: updateUser,
        statusCode: 200,
      });
    } else {
      res.status(400).send({ message: `Failed to update user`, statusCode: 400 });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

exports.delete = async (req, res) => {
  let deleteUser = await User.deleteOne({ _id: req.param.id });
  try {
    if (deleteUser) {
      res.send({
        message: `Successfull to delete user`,
        sendData: deleteUser,
        statusCode: 200,
      });
    } else {
      res.status(400).send({ message: `Failed to delete user`, statusCode: 400 });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

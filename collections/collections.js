const User = require("../model/schema");
// const { _id } = require("../router/router");

exports.createUser = async (req, res) => {
  try {
    const {
      id,
      CPU,
      "GPU VRAM": gpuVram,
      "RAM Utilization": ramUtilization,
      "Avg Temp": avgTemp,
      PowerUtilization,
      Temperature,
      categories,
      data,
    } = req.body;

    const user = await User.create({
      id,
      CPU,
      "GPU VRAM": gpuVram,
      "RAM Utilization": ramUtilization,
      "Avg Temp": avgTemp,
      PowerUtilization,
      Temperature,
      categories,
      data,
    });

    return res.status(200).json({
      success: true,
      message: "User is created",
      user,
    });
  } catch (error) {
    console.log("error in create user controller");
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "User not created",
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      success: true,
      message: "Users fetched",
      users,
    });
  } catch (error) {
    console.log("error in get user controller");
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "Users not fetched",
    });
  }
};

exports.patchUser = async (req, res) => {
  try {
    const id = req.params.id;
    const patchUser = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    // res.send(patchUser);
    return res.status(200).json({
      success: true,
      message: "Users updated",
      patchUser,
    });
  } catch (error) {
    console.log("error in get user controller");
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "Users not fetched",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findByIdAndDelete(_id);

    return res.status(200).json({
      success: true,
      message: "User deleted",
      user,
    });
  } catch (error) {
    console.log("error in get user controller");
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "Users not fetched",
    });
  }
};

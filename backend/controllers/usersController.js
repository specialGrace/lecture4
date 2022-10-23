import User from "../models/UserModel.js";
import generateToken from "../utils/generateToken.js";
import asyncHandler from "express-async-handler";

//@desc : get all user
//route: GET /api/v1/users
//access: privite - admin only
const getUsers = async (req, res) => {
  res.send("get all users");
};

//@desc : create user
//route: POST /api/v1/users/register
//access: public
const createUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    //check that user does not exist
    const userExist = await User.find({ email: email });
    console.log(userExist);
    if (userExist.length > 0) {
      throw new Error("Email already exist");
    }
    //create use
    const user = await User.create({
      email,
      password,
    });

    res.status(200).json({
      status: "success",
      user: {
        _id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      status: "fail",
      error: err.message,
    });
  }
};

//@desc : login user
//route: POST /api/v1/users/login
//access: public
const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //check that email exist
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(402);
      throw new Error("User does not exist, pls register");
    }

    if (user && (await user.passwordMatched(password))) {
      res.status(201).json({
        status: "success",
        user: {
          _id: user._id,
          email: user.email,
          role: user.role,
          token: await generateToken(user._id),
        },
      });
    } else {
      res.status(400);
      throw new Error("incorrect password");
    }
  } catch (err) {
    console.log(err.message);
    res.json({
      message: err.message,
    });
  }
});

export { getUsers, createUser, loginUser };

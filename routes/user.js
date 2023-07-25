const router = require("express").Router();
const User = require("../models/user");

/*
name,
username,
email,
password
*/

/**
 * C = Create (post)
 * R = Read (get)
 * U = Update (put)
 * D = Delete (delete)
 */

/* User Registration */
router.post("/user", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  // saving the user info into the mogodb Database
  try {
    const savedUserData = await newUser.save();
    res.status(200).json(savedUserData);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* Getting all users */
router.get("/users", async (req, res) => {
  try {
    const getAllUsers = await User.find({});
    res.status(200).json(getAllUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* Getting one user */
router.get("/:id", async (req, res) => {
  try {
    const findUser = await User.findById(req.params.id);
    res.status(200).json(findUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* Delete a user */

/* Update user info */
router.put("/:id", async (req, res) => {
  try {
    const query = { _id: req.params.id };
    const udatedUser = await User.findOneAndUpdate(
      query,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(udatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

const express = require("express");
const {
  createUser,
  getUsers,
  patchUser,
  deleteUser,
} = require("../collections/collections");

const router = express.Router();

router.post("/post", createUser);
router.get("/get", getUsers);
router.patch("/patch/:id", patchUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;

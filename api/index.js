const express = require("express");
const { ctrlWrapper } = require("../helpers/ctrlWrapper");
const createMessage = require("../controllers/createMessage");
const router = express.Router();

router.post("/", ctrlWrapper(createMessage));

module.exports = router;

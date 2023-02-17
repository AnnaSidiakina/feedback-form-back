const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");

const message = new Schema({
  name: {
    type: String,
    required: [true, "Set name for message"],
  },
  email: {
    type: String,
    required: [true, "Set email for message"],
  },
  message: {
    type: String,
    required: [true, "Set message"],
  },
});

const handleError = (error, data, next) => {
  const { name, code } = error;
  if (name === "ValidationError") {
    error.status = 400;
  }
  next();
};
message.post("save", handleError);

const validationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({
    minDomainSegments: 2,
  }),
  message: Joi.string(),
});

const Message = mongoose.model("message", message);

module.exports = { Message, validationSchema };

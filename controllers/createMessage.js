const { BadRequest } = require("http-errors");
const { Message, validationSchema } = require("../services/schema");

const createMessage = async (req, res, next) => {
  const { name, email, message } = req.body;

  const { error } = validationSchema.validate({ name, email, message });
  if (error) {
    throw BadRequest("missing required name field");
  }

  const data = await Message.create({
    name,
    email,
    message,
  });
  res.status(201).json(data);
};
module.exports = createMessage;

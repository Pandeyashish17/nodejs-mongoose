const mongoose = require("mongoose");
const testingSchema = mongoose.Schema({
  title: String,
  description: String,
  content: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const testingModal = mongoose.model("testing", testingSchema);
module.exports = testingModal;

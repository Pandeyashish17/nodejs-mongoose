const mongoose = require("mongoose");
const testingModal = require("../modal/Testing");

module.exports.getTesting = async (req, res) => {
  try {
    const testingData = await testingModal.find();
    console.log(testingData);
    res.status(200).json({ data: testingData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.postTesting = async (req, res) => {
  console.log(req);
  try {
    const testingData = new testingModal({
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
    });
    await testingData.save();
    res
      .status(201)
      .json({ data: testingData, message: "testing is working successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

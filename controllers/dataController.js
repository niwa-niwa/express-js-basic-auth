const dbClient = require("../config/dbConnection");

const getStatus = async (req, res) => {
  res.status(200).send("success");
};

const dataController = {
  getStatus,
};

module.exports = dataController;

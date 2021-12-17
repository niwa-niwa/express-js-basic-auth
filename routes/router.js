const express = require("express");
const basicAuth = require("../middlewares/basicAuth");
const dataController = require("../controllers/dataController");

const router = express.Router();

router.use(
  "/v1",
  basicAuth,
  express.Router().get("/", dataController.getStatus)
);

module.exports = router;

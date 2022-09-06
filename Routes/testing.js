const express = require("express");
const getTesting = require("../controller/testing");

const router = express.Router();

/**
 * @swagger
 * tags:
 *    name: testing
 *    description: api for testing
 *
 *
 */

/**
 * @swagger
 * /testing:
 *   get:
 *       summary: use to get all testing data
 *       tags: [testing]
 *       responses:
 *          "200":
 *            description: successful response
 */
router.get("/", getTesting.getTesting);
router.post("/", getTesting.postTesting);
module.exports = router;

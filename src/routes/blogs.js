const express = require("express");
const blogsController = require("../controller/blogs");
const router = express.Router();

router
  .get("/:id", blogsController.getBlogById)
  .post("/", blogsController.createBlog)
  .delete("/:id", blogsController.deleteBlog)

module.exports = router;

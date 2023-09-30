const express = require("express");
const router = express.Router();
const articlesRouter = require("./articles");
const blogsRouter = require("./blogs");
const usersRouter = require("../routes/users");

router.use("/blogging/api/articles", articlesRouter);
router.use("/blogging/api/blogs", blogsRouter);
router.use("/blogging/api/users", usersRouter);

module.exports = router;

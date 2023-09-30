const express = require("express");
const articleController = require("../controller/articles");
const router = express.Router();

router
  .get("/blog/:blog_id", articleController.getArticleByBlog)
  .get("/:id", articleController.getDetailArticle)
  .post("/", articleController.createArticle)
  .put("/:id", articleController.updateArticle)
  .delete("/:id", articleController.deleteArticle);

module.exports = router;
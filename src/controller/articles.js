const {
  selectArticleByBlog,
  selectDetailArticle,
  insertArticle,
  updateArticle,
  deleteArticle,
  findId,
} = require("../model/articles");
const commonHelper = require("../helper/common");
const { v4: uuidv4 } = require("uuid");

const articleController = {
  getArticleByBlog: async (req, res) => {
    const blog_id = String(req.params.blog_id);
    try {
      const result = await selectArticleByBlog(blog_id);
      commonHelper.response(res, result.rows, 200, "get data success");
    } catch (error) {
      console.log(error);
    }
  },

  getDetailArticle: async (req, res) => {
    const id_article = String(req.params.id);
    const { rowCount } = await findId(id_article);
    if (!rowCount) {
      return res.json({ message: "ID Not Found" });
    }
    selectDetailArticle(id_article)
      .then((result) => {
        commonHelper.response(
          res,
          result.rows,
          200,
          "get data success from database"
        );
      })
      .catch((err) => res.send(err));
  },

  createArticle: async (req, res) => {
    const { title, article, user_id, blog_id } = req.body;
    const id_article = uuidv4();
    const data = {
      id_article,
      title,
      article,
      user_id,
      blog_id,
    };
    insertArticle(data)
      .then((result) =>
        commonHelper.response(res, result.rows, 201, "Example created")
      )
      .catch((err) => res.send(err));
  },

  updateArticle: async (req, res) => {
    try {
      const id_article = String(req.params.id);
      const { title, article } = req.body;
      const { rowCount } = await findId(id_article);
      if (!rowCount) {
        res.json({ message: "ID is Not Found" });
      }
      const data = {
        id_article,
        title,
        article,
      };
      updateArticle(data)
        .then((result) =>
          commonHelper.response(res, result.rows, 200, "Example updated")
        )
        .catch((err) => res.send(err));
    } catch (error) {
      console.log(error);
    }
  },

  deleteArticle: async (req, res) => {
    try {
      const id_article = String(req.params.id);
      const { rowCount } = await findId(id_article);
      if (!rowCount) {
        res.json({ message: "ID is Not Found" });
      }
      deleteArticle(id_article)
        .then((result) =>
          commonHelper.response(res, result.rows, 200, "Example deleted")
        )
        .catch((err) => res.send(err));
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = articleController;

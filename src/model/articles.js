const Pool = require("../config/db");

const selectArticleByBlog = (blog_id) => {
  return Pool.query(`SELECT * FROM articles WHERE blog_id='${blog_id}'`);
};

const selectDetailArticle = (id_article) => {
  return Pool.query(`SELECT * FROM articles WHERE id_article='${id_article}'`);
};

const insertArticle = (data) => {
  const { id_article, title, article, user_id, blog_id } = data;
  return Pool.query(
    `INSERT INTO articles(id_article,title,article,user_id,blog_id) VALUES('${id_article}','${title}','${article}','${user_id}','${blog_id}')`
  );
};

const updateArticle = (data) => {
  const { id_article, title, article } = data;
  return Pool.query(
    `UPDATE articles SET title='${title}', article='${article}' WHERE id_article='${id_article}'`
  );
};

const deleteArticle = (id_article) => {
  return Pool.query(`DELETE FROM articles WHERE id_article='${id_article}'`);
};

const countData = () => {
  return Pool.query("SELECT COUNT(*) FROM articles");
};

const findId = (id_article) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT id_article FROM articles WHERE id_article='${id_article}'`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    )
  );
};

module.exports = {
  selectArticleByBlog,
  selectDetailArticle,
  insertArticle,
  updateArticle,
  deleteArticle,
  countData,
  findId,
};

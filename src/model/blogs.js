const Pool = require("../config/db");

const selectBlogById = (user_id) => {
  return Pool.query(`SELECT * FROM blogs WHERE user_id='${user_id}'`);
};

const insertBlog = (data) => {
  const { id_blog, blog_title, user_id } = data;
  return Pool.query(
    `INSERT INTO blogs(id_blog,blog_title,user_id) VALUES('${id_blog}','${blog_title}','${user_id}')`
  );
};

const deleteBlog = (id_blog) => {
  return Pool.query(`DELETE FROM blogs WHERE id_blog='${id_blog}'`);
};

const findId = (id_blog) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT id_blog FROM blogs WHERE id_blog='${id_blog}'`,
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
  selectBlogById,
  insertBlog,
  deleteBlog,
  findId,
};

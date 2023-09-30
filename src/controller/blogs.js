const {
  selectBlogById,
  insertBlog,
  deleteBlog,
  findId,
} = require("../model/blogs");
const commonHelper = require("../helper/common");
const { v4: uuidv4 } = require("uuid");

const blogsController = {
  getBlogById: async (req, res) => {
    const user_id = String(req.params.id);
    try {
      const result = await selectBlogById(user_id);
      commonHelper.response(res, result.rows, 200, "get data success");
    } catch (error) {
      console.log(error);
    }
  },

  createBlog: async (req, res) => {
    const { blog_title, user_id } = req.body;
    const id_blog = uuidv4();
    const data = {
      id_blog,
      blog_title,
      user_id,
    };
    insertBlog(data)
      .then((result) =>
        commonHelper.response(res, result.rows, 201, "Example created")
      )
      .catch((err) => res.send(err));
  },

  deleteBlog: async (req, res) => {
    try {
      const id_blog = String(req.params.id);
      const { rowCount } = await findId(id_blog);
      if (!rowCount) {
        res.json({ message: "ID is Not Found" });
      }
      deleteBlog(id_blog)
        .then((result) =>
          commonHelper.response(res, result.rows, 200, "Example deleted")
        )
        .catch((err) => res.send(err));
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = blogsController;

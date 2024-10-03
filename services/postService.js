const { Post } = require('../models');

exports.createPost = async (data) => {
  return await Post.create(data);
};

exports.getPosts = async ({ author, creationDate, page = 1, limit = 10 }) => {
  const where = {};
  if (author) where.author = author;
  if (creationDate) where.creationDate = creationDate;

  const offset = (page - 1) * limit;
  const posts = await Post.findAndCountAll({
    where,
    limit: parseInt(limit),
    offset: offset,
    order: [['creationDate', 'DESC']],
  });

  return {
    total: posts.count,
    pages: Math.ceil(posts.count / limit),
    currentPage: parseInt(page),
    data: posts.rows,
  };
};

exports.getPostById = async (id) => {
  const post = await Post.findByPk(id);
  if (!post) throw { statusCode: 404, message: 'Post not found' };
  return post;
};

exports.updatePost = async (id, data) => {
  const post = await Post.findByPk(id);
  if (!post) throw { statusCode: 404, message: 'Post not found' };

  post.title = data.title || post.title;
  post.content = data.content || post.content;
  await post.save();

  return post;
};

exports.deletePost = async (id) => {
  const post = await Post.findByPk(id);
  if (!post) throw { statusCode: 404, message: 'Post not found' };
  await post.destroy();
};

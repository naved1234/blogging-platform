const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');
const validate = require('../middlewares/validate');
const xssSanitizer = require('../middlewares/xssSanitizer');
const {
  createPostValidation,
  updatePostValidation,
  getPostValidation,
  getPostsValidation,
} = require('../validations/postValidation');

router.post(
  '/',
  authMiddleware(['writer', 'admin']),
  xssSanitizer(),
  validate(createPostValidation),
  postController.createPost
);
router.get('/', validate(getPostsValidation), postController.getPosts);
router.get('/:id', validate(getPostValidation), postController.getPostById);
router.put(
  '/:id',
  authMiddleware(['writer', 'admin']),
  xssSanitizer(),
  validate(updatePostValidation),
  postController.updatePost
);
router.delete('/:id', authMiddleware(['admin']), validate(getPostValidation), postController.deletePost);

module.exports = router;

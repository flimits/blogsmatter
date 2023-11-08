const User = require('./User');
const Blog = require('./Blog');
const Comments = require('./Comments');

Blog.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Comments.belongsTo(Blog, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE',
});

Comments.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Blog, Comments };
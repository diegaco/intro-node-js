const { users, posts } = require('./data');

module.exports = {
  getUserById: (id, cb) => {
    // simulate API call
    setTimeout(() => {
      const user = users.find(user => user.id === id)
      cb(user)
    }, 150)
  },
  getPostsForUser: (userId, cb) => {
    // simulate API call
    setTimeout(() => {
      const postsUser = posts.filter(post => post.createdBy === userId)
      cb(postsUser)
    }, 150)
  }
}
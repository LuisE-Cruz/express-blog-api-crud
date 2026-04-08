const blogPosts = require("../data/blogPosts")
const { post } = require("../routers/posts")

function index(req, res) {
    const id = parseInt(req.params.id)
    const post = blogPosts.filter(post => post.id === id)
    res.json(post)
}
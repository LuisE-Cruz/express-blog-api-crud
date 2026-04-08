const blogPosts = require("../data/blogPosts")
const { post } = require("../routers/posts")

function index(req, res) {
    const id = parseInt(req.params.id)
    const post = blogPosts.filter(post => post.id === id)
    res.json(post)
}

function show(req, res) {
    res.json(blogPosts)
}

function store(req, res) {
    res.send('Creazione nuovo post');
}

function update(req, res) {
    res.send('Modifica tutto del id' + req.params.id);
}

function modify(req, res) {
    res.send('Modifica una parte del id' + req.params.id);
}

function destroy(req, res) {
    res.send('Eliminazione del post ' + req.params.id);
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}
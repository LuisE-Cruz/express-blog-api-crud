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
    const id = parseInt(req.params.id)
    if (Number.isNaN(id)) {
        return res.status(404).json({ error: 'Post non trovato' })
    }
    const index = blogPosts.findIndex(p => p.id === id)
    if (index === -1) {
        return res.status(404).json({ error: 'Post non trovato' })
    }
    blogPosts.splice(index, 1)
    console.log('Lista post aggiornata:', blogPosts)
    return res.status(204).send()
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}
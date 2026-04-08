const blogPosts = require("../data/blogPosts")

function index(req, res) {

    const objectPosts = {
        postsNumber: blogPosts.length,
        posts: blogPosts
    }
    res.json(objectPosts)
}

function show(req, res) {
    const postId = blogPosts.find(post =>
        post.id === parseInt(req.params.id));

    if (!postId) {
        res.status(404);
        return res.json({
            error: "404 Not Found",
            message: "post non trovato"
        })
    }

    res.json(postId);
}

function store(req, res) {
    const newId = blogPosts[blogPosts.length - 1].id + 1;

    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };

    blogPosts.push(newPost);

    res.status(201);
    res.json(newPost)

}

function update(req, res) {

    const id = parseInt(req.params.id)
    const post = blogPosts.find(post => post.id === id);

    if (!post) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    console.log('Lista post aggiornata:', blogPosts)

    res.json(post);
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
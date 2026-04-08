const express = require('express')
const router = express.Router()
const posts = require("../data/blogPosts")


// index

router.get('/', function (req, res) {
    res.send('Bacheca dei post del blog')
})
// show
router.get('/:id', function (req, res) {
    res.send('Post del blog con id ' + req.params.id)
})

//store 
router.post('/', function (req, res) {
    res.send('Creazione nuova post');
});

// update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
});

// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
});

// delete
router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post ' + req.params.id);
});

module.exports = router
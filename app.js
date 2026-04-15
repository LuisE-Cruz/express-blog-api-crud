const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routers/posts')

function pageNotFound(req, res, next) {
    res.status(404)
    res.json({
        error: "Not Found any Page",
        message: "Pagina non trovata"
    })
    next();
}

function errorsHandler(err, req, res, next) {
    res.status(500)
    res.json({
        error: err.message
    });

}

app.use(express.static('public'));
app.use(express.json());
app.use(pageNotFound)
app.use(errorsHandler)

app.get('/', (req, res) => {
    res.send('Server del mio blog')
});

app.use('/posts', postsRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

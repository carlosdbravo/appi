const { Router } = require('express');
const router = Router();
const movies = require('./samples.json')


router.get('/', (req, res) => {
    res.json(movies);
})


router.post('/', async (req, res) => {

    const { title, director, year, raiting } = req.body;
    if (title && director && year && raiting) {
        const id = movies.length + 1;
        const newMovie = { ...req.body, id }
        await client.db("appi").collection("movies").insertOne({ newMovie })
        movies.push(newMovie)
        res.json(movies);
        console.log(movies)
    } else {
        res.send("Wrong request")
    }

})


module.exports = router;
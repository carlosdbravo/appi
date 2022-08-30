const { Router } = require("express")
const router = Router();
//import fetch from "node-fetch"
const fetch = require("node-fetch")
//const fetch = (...args) =>
//import('node-fetch').then(({ default: fetch }) => fetch(...args));

router.get("/", async (req, res) => {
    // res.send("users")
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    res.json(users)
})
module.exports = router

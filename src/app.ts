import express from 'express'

const app = express()

const port = 5000
app.get('/', (req, res) => { res.status(200).send("访问成功!hhhhhhhhh") })
app.listen(port, () => console.log(`Running on port ${port}`))
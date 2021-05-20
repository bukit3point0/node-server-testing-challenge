const express = require("express");

const CreatorsRouter = require('./creators/creators-router')
const PanelsRouter = require('./panels/panels-router')

const server = express();

server.use(express.json());

server.use('/api/creators', CreatorsRouter)
server.use('/api/panels', PanelsRouter)

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" })
})

module.exports = server;
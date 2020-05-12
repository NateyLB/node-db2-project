const express = require('express');

const db = require("./data/dbConfig.js");

const server = express();

server.use(express.json());

server.get("/", (req, res)=>{
    db("Cars")
    .then(cars =>{
        res.status(200).json(cars)
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({message: err.message})
    })
})

module.exports = server;

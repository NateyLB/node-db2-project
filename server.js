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

server.post("/", (req, res)=>{
    db("Cars")
    .insert(req.body)
    .then(id=>{
        res.status(201).json({data: id[0], message: "Succesfully created a new car."})
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: error.messsage });
      });
})

module.exports = server;

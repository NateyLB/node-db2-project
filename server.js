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

server.put("/:id",(req, res)=>{
    db("Cars")
    .where({id : req.params.id})
    .update(req.body)
    .then(count =>{
        res.status(200).json({data: count, message: "Succesfully updated"})
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: error.messsage });
      });
})

server.delete("/:id", (req, res)=>{
    db("Cars")
    .where({id: req.params.id})
    .del()
    .then(count=>{
        if(count>0){
            db("Cars")
            .then(cars=>{
                res.status(200).json(cars)
            })
        }else{
            res.status(500).json({message: "Could not delete the specified car"})
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: error.messsage });
      });
})

module.exports = server;

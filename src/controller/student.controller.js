const db = require('../models');
const Students = db.stdents;

exports.create = (req, res) => {
    if (!req.body.id || !req.body.name || !req.body.currentClass || !req.body.division) {
        res.status(400).send({ message: "Cannot enter with empty value" })
        return
    }
    else {
        console.log(req.header.name);
        const students = new Students({
            id: req.body.id,
            name: req.body.name,
            currentClass: req.body.currentClass,
            division: req.body.division
        });
        students.save(students).then((data) => {
            res.send(data);
        }).catch(err => {
            res.status(500).send(err.message);
        })
    }
}

exports.findAll = (req, res) => {
    Students.find().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: "Internal Server Error"
        });
    });
}

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Data cannot be empty"
        })
    }
    const id = req.params.id;
    Students.findByIdAndUpdate(id, req.body, { useFindAndModify: true }).then((data) => {
        if (!data) {
            res.status(404).send({
                message: "No data with id " + id
            })
        }
        else {
            res.send(data)
        }
    }).catch(err => {
        res.status(500).send({
            message: "error updating with the " + id
        })
    })
}

exports.delete = (req , res) =>{
    const id = req.params.id;
    Students.findByIdAndRemove(id , {useFindAndModify : true}).then(data =>{
        if(!data){
            res.status(404).send({
                message : "Data Not found"
            })
        }
        else{
            res.send({
                message : "Data Deleted Successfully"
            })
        }
    }).catch(err =>{
        res.status(500).send({
            message : "internal server error"
        })
    })
}
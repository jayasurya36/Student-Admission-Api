module.exports = app =>{
    const student = require('../controller/student.controller');
    const router = require('express').Router();

    router.post('/' , student.create);
    router.get('/' , student.findAll);
    router.put('/:id' , student.update);
    router.delete('/:id' , student.delete)
    app.use('/api/student' , router);
}
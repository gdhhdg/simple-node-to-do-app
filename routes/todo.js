/**
 * Created by gunnerhatmaker on 5/7/18.
 */
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const todo = require('../schemas/todo.model');

router.get('/', function (req,res,next) {
    todo.find({}).exec(function (err, todos) {
        if(err){
            res.render(err);
        } else {
            res.render('todo', {title: 'To Do List', todos: todos});
        }
        }
    );
});

router.post('/', function (req,res,next) {
    const newtodo = new todo();
    newtodo.task = req.body.task;
    newtodo.finishState = false;
    newtodo.save(newtodo.task, function (err, todo) {
        if (err) {
            res.send(err);
        } else {
            res.redirect(req.originalUrl);
        }
    });
});

router.delete('/:id', function (req,res,next) {
    todo.findOneAndRemove({
        _id: req.params.id},
            function (err, newTodo) {
                    console.log(newTodo);
                    res.redirect(req.originalUrl);
            }
    );
});

    module.exports = router;

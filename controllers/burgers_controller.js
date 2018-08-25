var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        var burgerObj = {
            burgers: data
        };
        res.render("index", burgerObj);
    });
});

router.post('/burgers', function(req, res) {
    burger.insertOne([
        'burger_name'
    ], [
        req.body.burger_name
    ], function(result) {
        res.json(result);
    });
});

router.put('/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function(data) {
        res.json(result);
    });
});

module.exports = router;
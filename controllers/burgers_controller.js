//requirements
var express = require("express");
var router = express.Router();
var burger = require("../models/burgers.js");

//main index router
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", { burgers: data });
    });
});

//burger api router
router.post("/api/burgers", function(req, res) {
    burger.insertOne([req.body.name], function(result) {
        res.json({ id: result.insertId });
    });
});

//burger id router
router.put("/api/burgers/:id", function(req, res) {
    var burgerId = req.params.id;
    burger.updateOne(burgerId, function(result) {
        if (result.switchRow === 0) {
            return res.status(404).end();
        }
        res.status(200).end()
    })
})

//export router
module.exports = router;

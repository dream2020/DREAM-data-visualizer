var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET users listing. */
router.get('/:robot', function(req, res, next) {
    fs.readFile('nao/' + req.params.robot, function(err,nao) {
        if (err) {
            console.log(err);
            res.send({});
        } else {
            res.send(nao);
        }
    });
});

module.exports = router;

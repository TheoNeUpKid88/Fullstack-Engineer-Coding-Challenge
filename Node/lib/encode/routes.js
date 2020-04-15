const express = require('express');
const router = express.Router();
const model = require('./model');
const payloadChecker = require('payload-validator');

router.get("/", (req, res, next) =>{
    res.json({ "message": "GET not supported" });
})

router.post("/", (req, res, next) =>{
    if (req.body) {
        var result = payloadChecker.validator(req.body, expectedPayload, ["Shift", "Message"], false);
        if (result.success) {
            next()
        } else {
            res.json({ "message": result.response.errorMessage });
        }
    } else {
        res.json({ "message": "paylod not correct" });
    }
})

module.exports = router;
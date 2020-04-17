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
            model.shiftty(req.body, (error, success) =>{
                if(error){
                    res.status(500).json({ "EncodedMessage": '' });
                }
                if(success){
                    res.json(success);
                }
            })
        } else {
            res.status(500).json({ "EncodedMessage": '' });
        }
    } else {
        res.status(500).json({ "EncodedMessage": '' });
    }
})

module.exports = router;
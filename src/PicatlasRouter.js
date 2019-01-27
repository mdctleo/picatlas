"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PicatlasImpl_1 = require("./PicatlasImpl");
let express = require('express');
let router = express.Router();
let picatlasImpl = new PicatlasImpl_1.default();
router.get('/getRandomDestination/', (req, res, next) => {
    picatlasImpl.selectRandomDest()
        .then((result) => {
        res.status(200).send(result);
    })
        .catch((err) => {
        res.status(400).send(err);
    });
});
router.get('/getDestinationWithTag/:name', (req, res, next) => {
    picatlasImpl.selectRandomDestWithTag(req.body.tags)
        .then((result) => {
        res.status(200).send(result);
    })
        .catch((err) => {
        res.status(400).send(err);
    });
});
//# sourceMappingURL=PicatlasRouter.js.map
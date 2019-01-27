"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PicatlasImpl_1 = require("./PicatlasImpl");
let express = require('express');
let router = express.Router();
let picatlasImpl = new PicatlasImpl_1.default();
router.get('/selectPhaseOnePictures/', (req, res, next) => {
    picatlasImpl.selectPhaseOnePictures()
        .then((result) => {
        res.status(200).send(result);
    })
        .catch((err) => {
        res.status(400).send(err);
    });
});
router.get('/selectPhaseTwoPictures', (req, res, next) => {
    picatlasImpl.selectPhaseTwoPictures(req.body.tags)
        .then((result) => {
        res.status(200).send(result);
    })
        .catch((err) => {
        res.status(400).send(err);
    });
});
module.exports = router;
//# sourceMappingURL=PicatlasRouter.js.map
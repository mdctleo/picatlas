import PicatlasImpl from "./PicatlasImpl";

let express = require('express');
let router = express.Router();
let picatlasImpl = new PicatlasImpl();

// Return phase one pictures
router.get('/selectPhaseOnePictures/', (req: any, res: any, next: any) => {
    picatlasImpl.selectPhaseOnePictures()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// Return phase two pictures, given user preference between 'Nature' and 'Urban'
router.post('/selectPhaseTwoPictures', (req: any, res: any, next: any) => {
    picatlasImpl.selectPhaseTwoPictures(req.body.tags)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// Calculate highest scoring picture given user preferences on tags, return that picture
router.post('/selectFinalPicture', (req: any, res: any, next: any) => {
    picatlasImpl.selectFinalPicture(req.body.tags)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

module.exports = router;


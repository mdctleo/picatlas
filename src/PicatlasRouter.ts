import PicatlasImpl from "./PicatlasImpl";

let express = require('express');
let router = express.Router();
let picatlasImpl = new PicatlasImpl();
// Random destination
router.get('/selectPhaseOnePictures/', (req: any, res: any, next: any) => {
    picatlasImpl.selectPhaseOnePictures()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// Random destination with given tag
router.post('/selectPhaseTwoPictures', (req: any, res: any, next: any) => {
    picatlasImpl.selectPhaseTwoPictures(req.body.tags)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

module.exports = router;


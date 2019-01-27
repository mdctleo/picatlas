import PicatlasImpl from "./PicatlasImpl";

let express = require('express');
let router = express.Router();
let picatlasImpl = new PicatlasImpl();
// Random destination
router.get('/getRandomDestination/', (req: any, res: any, next: any) => {
    picatlasImpl.selectRandomDest()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// Random destination with given tag
router.get('/getDestinationWithTag/:name', (req: any, res: any, next: any) => {
    picatlasImpl.selectRandomDestWithTag(req.body.tags)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

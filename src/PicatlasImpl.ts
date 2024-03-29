import Database from "./Database";
var mysql = require('mysql');

export default class PicatlasImpl {
    readonly URBAN_ID = '1';
    readonly NATURE_ID = '3';

    private db: any;
    private con: any;

    constructor() {
        this.db = new Database();
        this.con = this.db.database;
    }

    // Get Image paths and tags of Nature images and Urban images
    public selectPhaseOnePictures(): Promise<any> {
        let sql = 'SELECT * FROM ((SELECT IMG_PATH, TAG_ID FROM DESTINATION ' +
            'LEFT JOIN DESTINATION_TAG ON DESTINATION_TAG.DESTINATION_ID = DESTINATION.DESTINATION_ID ' +
            'WHERE IMG_PATH IN (SELECT IMG_PATH FROM DESTINATION ' +
                                'LEFT JOIN DESTINATION_TAG ON DESTINATION_TAG.DESTINATION_ID = DESTINATION.DESTINATION_ID ' +
                                'WHERE DESTINATION_TAG.TAG_ID = ' + this.URBAN_ID + '))' +
            'UNION ' +
            '(SELECT IMG_PATH, TAG_ID FROM DESTINATION ' +
            'LEFT JOIN DESTINATION_TAG ON DESTINATION_TAG.DESTINATION_ID = DESTINATION.DESTINATION_ID ' +
            'WHERE IMG_PATH IN (SELECT IMG_PATH FROM DESTINATION ' +
                                'LEFT JOIN DESTINATION_TAG ON DESTINATION_TAG.DESTINATION_ID = DESTINATION.DESTINATION_ID ' +
                                'WHERE DESTINATION_TAG.TAG_ID = ' + this.NATURE_ID + '))) ' +
            'AS RESULT ORDER BY RAND()';

        return new Promise((resolve, reject) => {
            this.con.query(sql, (err: any, result: object[]) => {
                if (err) {
                    reject(err);
                } else {
                    let images = {};

                    result.forEach((element) => {
                        images[element['IMG_PATH']] = [];
                    });

                    result.forEach((element) => {
                        images[element['IMG_PATH']].push(element['TAG_ID']);
                    });

                    resolve(images);
                }
            })
        });
    }

    // Select ten random Image paths and tags of the preferred category between 'Nature' and 'Urban'
    public selectPhaseTwoPictures(tags: object): Promise<any> {
        let preferredCategory = '';

        // If Urban is preferred over Nature
        if (tags[this.URBAN_ID] > tags[this.NATURE_ID]) {
            preferredCategory = this.URBAN_ID;
        } else { // If Nature is preferred over Urban
            preferredCategory = this.NATURE_ID;
        }

        let sql =
            '(SELECT IMG_PATH, TAG_ID FROM DESTINATION ' +
            'LEFT JOIN DESTINATION_TAG ON DESTINATION_TAG.DESTINATION_ID = DESTINATION.DESTINATION_ID ' +
            'WHERE IMG_PATH IN (SELECT IMG_PATH FROM DESTINATION ' +
                                'LEFT JOIN DESTINATION_TAG ON DESTINATION_TAG.DESTINATION_ID = DESTINATION.DESTINATION_ID ' +
                                'WHERE DESTINATION_TAG.TAG_ID = ' + preferredCategory + ') ' +
            'ORDER BY RAND())';

        return new Promise((resolve, reject) => {
            this.con.query(sql, (err: any, result: any) => {
                if (err) {
                    reject(err);
                } else {
                    let images = {};

                    result.forEach((element) => {
                        images[element['IMG_PATH']] = [];
                    });

                    result.forEach((element) => {
                        images[element['IMG_PATH']].push(element['TAG_ID']);
                    });

                    resolve(images);
                }
            })
        });
    }

    // public selectFinalPicture(tags: object): Promise<any> {
    //     let sql =
    //
    //
    //
    //     return new Promise((resolve, reject) => {
    //         this.con.query(sql, (err: any, result: any) => {
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 let images = {};
    //
    //                 result.forEach((element) => {
    //                     images[element['IMG_PATH']] = [];
    //                 });
    //
    //                 result.forEach((element) => {
    //                     images[element['IMG_PATH']].push(element['TAG_ID']);
    //                 });
    //
    //                 resolve(images);
    //             }
    //         })
    //     });
    // }
}
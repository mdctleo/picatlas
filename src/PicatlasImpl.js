"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("./Database");
var mysql = require('mysql');
class PicatlasImpl {
    constructor() {
        this.URBAN_ID = '1';
        this.NATURE_ID = '3';
        this.db = new Database_1.default();
        this.con = this.db.database;
    }
    selectPhaseOnePictures() {
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
            this.con.query(sql, (err, result) => {
                if (err) {
                    reject(err);
                }
                else {
                    let images = {};
                    result.forEach((element) => {
                        images[element['IMG_PATH']] = [];
                    });
                    result.forEach((element) => {
                        images[element['IMG_PATH']].push(element['TAG_ID']);
                    });
                    resolve(images);
                }
            });
        });
    }
    selectPhaseTwoPictures(tags) {
        let preferredCategory = '';
        if (tags[this.URBAN_ID] > tags[this.NATURE_ID]) {
            preferredCategory = this.URBAN_ID;
        }
        else {
            preferredCategory = this.NATURE_ID;
        }
        let sql = '(SELECT IMG_PATH, TAG_ID FROM DESTINATION ' +
            'LEFT JOIN DESTINATION_TAG ON DESTINATION_TAG.DESTINATION_ID = DESTINATION.DESTINATION_ID ' +
            'WHERE IMG_PATH IN (SELECT IMG_PATH FROM DESTINATION ' +
            'LEFT JOIN DESTINATION_TAG ON DESTINATION_TAG.DESTINATION_ID = DESTINATION.DESTINATION_ID ' +
            'WHERE DESTINATION_TAG.TAG_ID = ' + preferredCategory + ') ' +
            'ORDER BY RAND())';
        return new Promise((resolve, reject) => {
            this.con.query(sql, (err, result) => {
                if (err) {
                    reject(err);
                }
                else {
                    let images = {};
                    result.forEach((element) => {
                        images[element['IMG_PATH']] = [];
                    });
                    result.forEach((element) => {
                        images[element['IMG_PATH']].push(element['TAG_ID']);
                    });
                    resolve(images);
                }
            });
        });
    }
}
exports.default = PicatlasImpl;
//# sourceMappingURL=PicatlasImpl.js.map
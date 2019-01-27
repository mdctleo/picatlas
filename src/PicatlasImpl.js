"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("./Database");
var mysql = require('mysql');
class PicatlasImpl {
    constructor() {
        this.db = new Database_1.default();
        this.con = this.db.database;
    }
    selectRandomDest() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryString = 'SELECT * FROM DESTINATION ORDER BY RAND() LIMIT 1';
            return new Promise((resolve, reject) => {
                this.con.query(mysql, (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(result);
                    }
                });
            });
        });
    }
    selectPhaseTwoPictures(tags) {
        let preferredCategory = 0;
        if (tags[1] > tags[3]) {
            preferredCategory = 1;
        }
        else {
            preferredCategory = 3;
        }
        let sql = 'SELECT IMG_PATH FROM DESTINATION ' +
            'LEFT JOIN DESTINATION_TAG ON DESTINATION_TAG.DESTINATION_ID = DESTINATION.DESTINATION_ID ' +
            'WHERE DESTINATION_TAG.TAG_ID = ' + preferredCategory + ' ' +
            'ORDER BY RAND() LIMIT 10';
        return new Promise((resolve, reject) => {
            this.con.query(sql, (err, result) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    }
}
exports.default = PicatlasImpl;
//# sourceMappingURL=PicatlasImpl.js.map
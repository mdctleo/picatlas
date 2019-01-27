import Database from "./Database";
var mysql = require('mysql');

export default class PicatlasImpl {
    private db: any;
    private con: any;

    constructor() {
        this.db = new Database();
        this.con = this.db.database;
    }

    public async selectRandomDest(): Promise<any> {
        const queryString = 'SELECT * FROM DESTINATION ORDER BY RAND() LIMIT 1';
        return new Promise((resolve, reject) => {
            this.con.query(mysql, (err: any, result: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        });
    }

    public selectPhaseTwoPictures(tags: string[]): Promise<any> {
        let preferredCategory = 0;
        // If Urban is preferred over Nature
        if (tags[1] > tags[3]) {
            preferredCategory = 1;
        } else { // If Nature is preferred over Urban
            preferredCategory = 3;
        }

        // Select ten random image paths of the selected category
        let sql = 'SELECT IMG_PATH FROM DESTINATION ' +
                  'LEFT JOIN DESTINATION_TAG ON DESTINATION_TAG.DESTINATION_ID = DESTINATION.DESTINATION_ID ' +
                  'WHERE DESTINATION_TAG.TAG_ID = ' + preferredCategory + ' ' +
                  'ORDER BY RAND() LIMIT 10';

        return new Promise((resolve, reject) => {
            this.con.query(sql, (err: any, result: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        });
    }
}
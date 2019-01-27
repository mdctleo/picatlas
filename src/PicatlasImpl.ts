import Database from "./Database";
var mysql = require('mysql');

export default class PicatlasImpl {
    private db: any;
    private con: any;

    constructor() {
        this.db = new Database();
        this.con = this.db.database;
    }

    public selectRandomDest(): Promise<any> {
        let sql = 'SELECT * FROM DESTINATION ORDER BY RAND() LIMIT 1';
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

    public selectRandomDestWithTag(tags: string[]): Promise<any> {
        let sql = 'SELECT * FROM DESTINATION WHERE dest-has-tag ORDER BY RAND() LIMIT 1';
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
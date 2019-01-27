import {createPool} from "mysql";

export default class Database {
    public database: any;

    constructor() {
        this.database = createPool({
            connectionLimit: 10,
            host: "35.197.116.75",
            user: "root",
            password: "dsmlLtzxlyFr3Hki",
            database: "picatlas",
            multipleStatements: true
        });
    }

}

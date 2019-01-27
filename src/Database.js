"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("mysql");
class Database {
    constructor() {
        this.database = mysql_1.createPool({
            connectionLimit: 10,
            host: "35.197.116.75",
            user: "root",
            password: "dsmlLtzxlyFr3Hki",
            database: "picatlas",
            multipleStatements: true
        });
    }
}
exports.default = Database;
//# sourceMappingURL=Database.js.map
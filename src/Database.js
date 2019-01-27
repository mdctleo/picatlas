"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("mysql");
class Database {
    constructor() {
        this.database = mysql_1.createPool({
            connectionLimit: 10,
            host: "localhost",
            user: "root",
            password: "root",
            database: "picatlas",
            multipleStatements: true
        });
    }
}
exports.default = Database;
//# sourceMappingURL=Database.js.map
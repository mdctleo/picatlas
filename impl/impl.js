import Database from "./Database";
var mysql = require('mysql');

export default class Impl {

  selectRandomDest() {
    return new Promise(function (resolve, reject) => {
      let qry = "SELECT * FROM DESTINATION ORDER BY RAND() LIMIT 1";
      setTimeout(function() {
        con.query(qry, (err, result) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolve(fmtTable(result));
          }
        };
      )}, 300);
    }
  )}

  selectRandomDestWithTag(name) {
    return new Promise(function (resolve, reject) => {
      let qry = "SELECT * FROM DESTINATION WHERE dest-has-tag ORDER BY RAND() LIMIT 1"; //TODO
      setTimeout(function() {
        con.query(qry, [name], (err, result) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolve(fmtTable(result));
          }
        };
      )}, 300);
    }
  )}

  getFinalOutput() {
    return new Promise(function (resolve, reject) => {
      let qry = "SELECT * FROM DESTINATION WHERE todo ORDER BY RAND() LIMIT 1"; //TODO
      setTimeout(function() {
        con.query(qry, (err, result) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolve(fmtTable(result));
          }
        };
      )}, 300);
    }
  )}
}



/*var con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query(qry, function (err, result, fields) {
  if (err) throw err;
  console.log(result);
  });
});*/
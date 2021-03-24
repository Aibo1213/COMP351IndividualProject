const http = require('http');
const url = require('url');
const mysql = require("mysql");
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "webdev"
});

http.createServer(function (req, res) {
    res.writeHead(200, { 
        'Content-Type': 'text/plain', 
        "Access-Control-Allow-Origin": "*" });
        let add = "aaaa.com";
    const q = url.parse(add, true);
    const qdata = q.query
    
    let content = qdata.content;
    let data = [content];
    let sql = `INSERT INTO quote(content) values (?)`;
    con.query(sql, data, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });

    res.end("Your input is saved into database!")

}).listen(8890);
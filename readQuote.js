const mysql = require("mysql");
const http = require('http');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "webdev"
});
const server = http.createServer(function(req,res){
    let words = "";
    let sql = `SELECT * FROM quote WHERE 1`
    res.writeHead(200,{
        'Content-Type':'text/plain',
        "Access-Control-Allow-Origin": "*"});
    
              
        con.query(sql, function(err,result){
            if(err) throw err;
            
            for(let i=0; i<result.length; i++){
                let re =JSON.stringify(result[i]);
                let res1 = JSON.parse(re);
                var word = res1.quoteID+": " + res1.content + "<br>";                
                words += word;
            }
            console.log(words);  
            res1.end(words);  
        }); 
}).listen(8849);

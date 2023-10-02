const mysql = require('mysql');  
  
const con = mysql.createConnection({ 
  
    host: process.env.DB_HOST, 
    password: process.env.DB_PASS, 
    user: process.env.DB_USER, 
    database: process.env.DB_DATABASE, 
    port: process.env.DB_PORT 
}) 
  
 export default function handler(req, res) { 

     const sql = "INSERT INTO "+process.env.UCH_UCH+" (helpful) VALUES ('allvid')";  
     con.query(sql, function(err, response) { 
         if (err) { 
             console.log(err); 
             throw err;  
         }; 
         console.log('success'); 
     }); 
 };
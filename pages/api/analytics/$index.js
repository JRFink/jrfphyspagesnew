const mysql = require('mysql');

const con = mysql.createConnection({
    host: process.env.DB_HOST, 
    password: process.env.DB_PASS,
    user: process.env.DB_USER, 
    port: process.env.DB_PORT, 
    database: process.env.DB_DATABASE 
})

export default function handler(req, res) {

    const sqlQ = "INSERT INTO "+process.env.BVN+" (ip_address) VALUES ("+mysql.escape(req.body)+")";

    con.query(sqlQ, function(err, response) {
        if (err) {
            console.log(err);
            throw(err); 
        };
        console.log('ip in')
    });
};
  



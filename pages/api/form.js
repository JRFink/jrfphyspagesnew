const mysql = require('mysql');

const con = mysql.createConnection({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
})

export default function handler(req, res) {

    const sqlQuery = "INSERT INTO "+process.env.BAT_BAT+" (firstname, lastname, email, phone) VALUES ("+mysql.escape(req.body.firstname)+" , "+mysql.escape(req.body.lastname)+","+mysql.escape(req.body.email)+" , "+mysql.escape(req.body.phone)+")";

    con.query(sqlQuery, function(err, response) {
        if (err) {
            console.log(err);
            throw(err)
        }
        console.log("success");
    })
 
}
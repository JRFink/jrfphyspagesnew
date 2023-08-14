const mysql = require('mysql'); 

console.log('made it');

const con = mysql.createConnection({

    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT

})

export default function handler(req, res) {

    const sql = "INSERT INTO "+process.env.UCH_UCH+" (note) VALUES ("+mysql.escape(req.body.noteData)+")"; 
    const sqlQuery = "INSERT INTO "+process.env.BAT_BAT+" (firstname, lastname, email, phone) VALUES ("+mysql.escape(req.body.firstname)+" , "+mysql.escape(req.body.lastname)+","+mysql.escape(req.body.email)+" , "+mysql.escape(req.body.phone)+")";

    con.query(sql, function(err, response) {
        if (err) {
            console.log(err);
            throw err; 
        };
        console.log('success');
    });
};
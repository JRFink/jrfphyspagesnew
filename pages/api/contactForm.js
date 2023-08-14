const mysql = require('mysql'); 

console.log('made it');

const con = mysql.createConnection({



})

const sql = "INSERT INTO myapp.newtable (notes) VALUES ('"+req.body.noteData+"')"; 

const query = con.query(sql,(err) => {
    if (err) {
        throw err; 
    }
    console.log('success');
});
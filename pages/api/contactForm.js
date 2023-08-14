const mysql = require('mysql'); 

console.log('made it');

const con = mysql.createConnection({

    host: 'localhost',
    password: 'Ubaldo!38!38', 
    user: 'root', 
    port: 3306,
    database: 'myapp' 

})

const sql = "INSERT INTO myapp.newtable (notes) VALUES ('"+req.body.note+"')"; 

const query = con.query(sql,(err) => {
    if (err) {
        throw err; 
    }
    console.log('success');
});
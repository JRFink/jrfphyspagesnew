const mysql = require('mysql');

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    user: process.env.DB_USER
})

const someFunc = (req, res) => {

    const sql = "SELECT * FROM +"+process.env.BAT_BAT+")";

    con.query(sql, (err, response)) {
        if (err) {
            throw (err); 
        }
        console.log('it fetched');
    } 
}

export default someFunc;


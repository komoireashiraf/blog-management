const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    port: 7500,
    user: 'root',
    password: 'kogmux-Qiksym-3cekka',
    database: 'blog_db',
});

db.connect((err) => {
    if (err) 
        throw err;
    console.log('Connected to MySQL');
});

module.exports = db;
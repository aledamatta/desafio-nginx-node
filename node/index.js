const express = require('express')
const app = express()
const path = require('path');
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Alexandre Da Matta')`
connection.query(sql)
// connection.end()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    var sql = 'SELECT * FROM people';
    connection.query(sql, function (err, data) {
        if (err) throw err;
        res.render('index', { userData: data });
    });
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})
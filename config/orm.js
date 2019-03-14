// file exists to import mysql from connection.js and then export
// Sql class.
// File is finished.
const sql = require('./connection.js')
const connection = sql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'sknighs',
    database:'burgers_db',
    multipleStatements:true
})
class Sql {
    query(cmd,func){
        connection.connect((err)=>{
            if (err) throw err
            connection.query(cmd,func,(err,data)=>{
                if (err) throw err
                if (func) func(data)
            })
        })
    }
    selectAll(func){
        let str = 'select * from burgers'
        this.query(str,func)
    }
    insertOne(name,func){
        let str = `insert into burgers (burger_name) values ('${name}')`
        this.query(str,func)
    }
    updateOne(name,id,func){
        let str = `update burgers set name='${name}' where id = ${id}`
        this.query(str,func)
    }
}

module.exports = Sql
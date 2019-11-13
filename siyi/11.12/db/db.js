const mysql = require('mysql');

//1.创建链接对象
let connection = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'root',
    port:'3306',
    database:'name'
})
//2.链接
connection.connect((error) => {
    if(error){
        console.log("链接失败")
    }else{
        console.log("链接成功")
    }
})

module.exports = connection
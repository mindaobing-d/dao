#! /usr/bin/env node
let axios = require("axios")
let add = require("./add")
console.log(add.sum.a=add.sum.a+add.add.sum)
console.log(process.argv.slice(2))
console.log(__dirname);
let age=process.argv.slice(2)
if(age[0]=="-v"){
    console.log("版本号0.0.1")
}else if(age[0]=="create"){
    console.log("初始化")
}  

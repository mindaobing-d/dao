const program = require('commander');
program.version("1.0.0")
program.option("-a,--add","add something")
program.parse(process.argv)
console.log(program)
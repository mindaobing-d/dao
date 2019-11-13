const inquirer = require('inquirer');
const promptList = [{
    type: 'input',
    message: '设置一个用户名:',
    name: 'name' // 默认值
},
{
    type: 'input',
    message: '请输入一个版本号:',
    name: 'version' // 默认值
},{
    type: 'input',
    message: '请输入一个js:',
    name: 'main',
}];
inquirer.prompt(promptList).then(answers => {
    console.log(answers); // 返回的结果
})
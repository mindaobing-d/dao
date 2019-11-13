const inquirer = require('inquirer');
const promptList = [{
    type: 'input',
    message: '请输入用户名:',
    name: 'name' // 默认值
},
{
    type: 'input',
    message: '请输入密码:',
    name: 'password' // 默认值
},{
    type: 'input',
    message: '请输入邮箱:',
    name: 'postbox',
}];
inquirer.prompt(promptList).then(answers => {
    console.log(answers); // 返回的结果
})
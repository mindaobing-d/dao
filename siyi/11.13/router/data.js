const router = require('koa-router')();
router.get('/list',async ctx => {
    let data = await query('select * from lists');
    let time = new Date();
    console.log(time)
    ctx.body = data;
})
module.exports =router
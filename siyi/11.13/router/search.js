const router = require('koa-router')();

router.get('/search',async ctx => {
    let {name} = ctx.query;  
    let sql = '';
    if(!name){
        sql = 'select * from lists';
    }else{
        sql = `select * from lists where name like '%${name}%'`;
    }
    try{
        let list = await query(sql);
        ctx.body = {
            code:1,
            data:list
        }
    }catch(e){
        ctx.body = {
            code:0,
            msg:e
        }
    }
})
module.exports =router
const router = require('koa-router')();
router.post('/add',async ctx => {
    let {name,bool} = ctx.request.body;
    if(name&&bool){
            let time = new Date();
            console.log(time)
            let data = await query('insert into lists (name,bool,time) values (?,?)',[name,bool,time]);
            if(data.msg === 'error'){
                ctx.body = {
                    code:0,
                    msg:error
                }
            }else{
                ctx.body = {
                    code:1,
                    msg:'添加成功'
                }
            }
    }else{
        ctx.body = {
            code:2,
            msg:'参数缺失'
        }
    }
   
})

module.exports =router
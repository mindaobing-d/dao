let router=require("koa-router")()
router.post('/edit',async ctx => {
    let {name} = ctx.request.body;
    if(name){
        try{
            await query('update lists set name=? where name=?',[name])
            ctx.body = {
                code:1,
                msg:'修改成功'
            }
        }catch(e){
            ctx.body = {
                code:0,
                msg:e.error
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
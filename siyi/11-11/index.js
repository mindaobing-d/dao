const Koa = require('koa');
const app = new Koa();
const static = require('koa-static');
const path = require('path');
const bodyparser = require('koa-bodyparser');
const router = require('koa-router')();
const query = require('./db/quer')
app.use(static(path.join(process.cwd(),'public')));
app.use(bodyparser()); 
app.use(router.routes());
app.use(router.allowedMethods());
router.get('/api/list',async ctx => {
    let data = await query('select * from koa');
    ctx.body = data;
})
//增
router.post('/api/add',async ctx => {
    let {name,pass} = ctx.request.body;
    if(name&&pass){ 
        let user = await query('select * from koa where name=?',[name]);
        if(user.data.length){
            ctx.body = {
                code:0,
                msg:'此人已存在'
            }
        }else{
            let data = await query('insert into koa (name,pass) values (?,?)',[name,pass]);
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
        }
    }else{
        ctx.body = {
            code:2,
            msg:'参数缺失'
        }
    }
   
})
router.get('/api/del',async ctx => {
    let {id} = ctx.query;
    if(id || id === 0){
        try{
            await query('delete from koa where id=?',[id])
            ctx.body = {
                code:1,
                msg:'删除成功'
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
router.post('/api/edit',async ctx => {
    let {name} = ctx.request.body;

    if(name){
        try{
            await query('update koa set name=? where id=?',[name])
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

router.get('/api/search',async ctx => {
    let {name} = ctx.query;
    let sql = '';
    if(!name){
        sql = 'select * from koa';
    }else{
        sql = `select * from koa where name like '%${name}%'`;
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

app.listen(process.env.PORT || 7001,() => {
    console.log("服务启动成功")
})
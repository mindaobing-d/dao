const Koa = require('koa');
const app = new Koa();
const static = require('koa-static');
const path = require('path');
const bodyparser = require('koa-bodyparser');
const router = require('koa-router')();
const query = require("./midd/query")
const router = require("./router")
app.use(static(path.join(process.cwd(),'public')));
app.use(bodyparser());
app.use(query())
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(process.env.PORT || 7001,() => {
    console.log("服务启动成功")
})
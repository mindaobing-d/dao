const router = require('koa-router')();

const add = require('./add');

const data = require('./data');

const del = require("./del")

const search = require("./search")

const updata = require("./updata")

router.use('/api',add.routes(),add.allowedMethods());

router.use('/api',data.routes(),data.allowedMethods());

router.use('/api',del.routes(),del.allowedMethods());

router.use('/api',search.routes(),search.allowedMethods());

router.use('/api',updata.routes(),updata.allowedMethods());


module.exports = router;
const connection=require("../db/db")
module.exports = () => {
    return async (ctx,next) => {
        ctx.mysql = {};
        let queryFun =  (sql,params=[]) => {
            return new Promise((resolve,reject)=>{
                connection.query(sql,params,(error,data) => {
                    if(error){
                        reject({msg:'error',error})
                    }else{
                        resolve({msg:'success',data})
                    }
                })
            })
        }
    
        ctx.mysql.query = queryFun;
        await next();
    }
}
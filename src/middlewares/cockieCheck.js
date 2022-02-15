
function coockie(req,res,next){
    if(req.cookies.color){
        req.session.bgColor = req.cookies.color
        res.locals.bgcolor = req.cookies.color
    }
    next()
}
module.exports=coockie
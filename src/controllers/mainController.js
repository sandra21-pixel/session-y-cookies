
const {validationResult}=require('express-validator')
const controller ={
    main:(req, res, next)=>{
        
        res.render('index');
      },

    selec:(req,res,next)=>{
      const datosUser=req.body
      const errors = validationResult(req)
    
      
      if(!errors.isEmpty()){
        
        res.render('index',{
          errors:errors.mapped(),
          data:req.body
        })
      }else{
        req.session.bgcolor = datosUser.colores
        res.locals.bgcolor = datosUser.colores
        req.session.userName = datosUser.name

        if(datosUser.recordame !== undefined){
          res.cookie('color',datosUser.colores,{maxAge:60000})
          
        }
        
        res.render('index',{datosUser})
        
      }
      
      
    },
    saludo:(req,res)=>{
      
      res.render('usuario',{
          userName: req.session.userName,
          bgcolor:req.session.bgcolor
        })
      

    },
    destroy:(req,res)=>{
      req.session.destroy()
      res.cookie('color',null,{maxAge:-1})
      res.redirect('/')
    }

}
module.exports = controller
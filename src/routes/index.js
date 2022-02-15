var express = require("express");
var router = express.Router();
const {body} = require("express-validator")
const { main,selec,saludo, destroy} = require("../controllers/mainController")

const validar =[
    body("name").notEmpty().withMessage("campo obligatorio"),
    body("email")
        .notEmpty().withMessage("campo obligatorio").bail()
        .isEmail().withMessage("ingrese un email valido"),
    body("edad").notEmpty().withMessage("campo obligatorio"),
    body("colores").notEmpty().withMessage("campo obligatorio")
    
]

/* GET home page. */
router.get("/", main);
router.post("/",validar,selec);
router.get("/usuario",saludo)
router.get("/destroy",destroy)


module.exports = router;

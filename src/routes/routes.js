const { Router } = require("express");// Permite definir nuevas rutas para nuestro servidor
const router = Router(); //  Ejecutamosel metodo y lo  guradamos enu una constante 

/*Ahora  ppodemos crear nuevas rutas*/

//Routes
router.get('/', (req, res) => {
 //   res.send("Hellow world");
    res.json({ "Nombre": "Carlos Bravo" })
});
router.get('/test',(req,res) =>{
    //res.send('/test')
})
module.exports = router;
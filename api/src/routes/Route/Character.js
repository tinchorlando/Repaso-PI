const { Router } = require ("express");
const { postCharacter } = require("./utils/utils");
const router = Router(); 


router.post('/',async(req,res,next)=>{
    try{
        const { name , species , origin , image , episode } = req.body;
        res.status(201).json(await postCharacter(name,species,origin,image,episode));
    } catch (error){
        next(error)
    }
});

module.exports = router;
const { Router } = require ("express");
const router = Router(); 
const { getCharacters } = require ('./utils/utils.js');


router.get('/',async(req,res,next)=>{
    try{
        res.status(200).json(await getCharacters())
    } catch(error){
        next(error);
    }
});

module.exports = router;
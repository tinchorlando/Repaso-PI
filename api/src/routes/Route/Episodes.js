const { Router } = require ("express");
const { getEpisodes } = require("./utils/utils");
const router = Router(); 


router.get('/',async(req,res,next)=>{
    try{
        res.status(200).json(await getEpisodes())
    } catch (error){
        next(error)
    }
});

module.exports = router;
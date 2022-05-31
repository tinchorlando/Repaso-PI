const { Router } = require("express");
const  getCharacters  = require('./Route/Characters.js');
const  getEpisodes  = require('./Route/Episodes.js');
const  postCharacter  = require('./Route/Character.js')
const router = Router();

// Configurar los routers
router.use('/characters',getCharacters);
router.use('/episodes',getEpisodes);
router.use('/character',postCharacter);
module.exports = router;

const { Character, Episode } = require ('../../../db.js');
const { episodeImport , getAllFromApi , getAllFromDb } = require('./functions/functions.js')

const getCharacters = async ()=>{
    const api = await getAllFromApi();
    const db = await getAllFromDb();
    
    if (db.length>0){
        const join = [...api,...db]
        return join
    }
    return api
}
const postCharacter = async (name,species,origin,image,episode)=>{

    const newCharacter = await Character.create({
        name,
        species,
        origin,
        image
    })
    const newEpisode = await Episode.findAll({
        where:{
            name:episode,
        }
    })
    newCharacter.setEpisodes(newEpisode)
    return newCharacter;
}
const getEpisodes = async ()=>{
    await episodeImport();
    const episodes = await Episode.findAll();
    return episodes
}

module.exports={
    getCharacters,
    postCharacter,
    getEpisodes,
}
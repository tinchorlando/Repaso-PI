const { Character, Episode } = require ('../../../db.js');
const { getAllFromApi , getAllFromDb } = require('./functions/functions.js')

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
    //episode viene con un array de los id de cada episodio
    if (episode) await newCharacter.addEpisodes(episode)    
    
    return newCharacter;
}
const getEpisodes = async ()=>{    
    const episodes = await Episode.findAll();
    return episodes
}

module.exports={
    getCharacters,
    postCharacter,
    getEpisodes,
}
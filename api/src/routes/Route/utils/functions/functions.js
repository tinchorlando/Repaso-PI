const axios = require('axios');
const { Character , Episode } = require('../../../../db.js');
const getAllFromApi = async ()=>{
    const apiData = await axios.get('https://rickandmortyapi.com/api/character')
    const sortedApi = await apiData.data.results.map(p=>{
        let character = {
            id:p.id,
            name:p.name,                        
            species:p.species,
            origin:p.origin.name,
            image:p.image,
            episode:p.episode,
        }
        return character
    })
    return sortedApi
}
const getAllFromDb = async ()=>{
    const dbData = await Character.findAll({include:Episode});
    const dbList = await dbData.map(p=>{
        let newChar={
            id: p.dataValues.id,
            name:p.dataValues.name,
            species:p.dataValues.species,
            origin:p.dataValues.origin,
            image:p.dataValues.image,
            episode:p.dataValues.episodes.map(p=>{
                let link = `https://rickandmortyapi.com/api/episode/${p.id}`
                return link
            })
        }
        return newChar;
    })
    return dbList
}

module.exports={
    getAllFromApi,
    getAllFromDb,
}
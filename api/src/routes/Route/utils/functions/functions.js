const axios = require('axios');
const { Character , Episode } = require('../../../../db.js');
const getAllFromApi = async ()=>{
    const apiData = await axios.get('https://rickandmortyapi.com/api/character')
    const sortedApi = await apiData.data.results.map(p=>{
        let character = {
            id:p.id,
            name:p.name,                        
            species:p.species,
            origin:p.origin,
            image:p.image,
            episode:p.episode,
        }
        return character
    })
    return sortedApi
}
const getAllFromDb = async ()=>{
    const dbData = await Character.findAll();
    const dbList = await dbData.map(p=>{
        let newChar={
            id: p.dataValues.id,
            name:p.dataValues.name,
            species:p.dataValues.species,
            origin:p.dataValues.origin,
            image:p.dataValues.image,            
        }
        return newChar;
    })
    return dbList
}
const episodeImport = async()=>{
    const check = await Episode.findAll({})
    if (check.length === 0){
        console.log('se ingreso al condicional')
        const episodes = await axios.get('https://rickandmortyapi.com/api/episode')
        const episodeList = await episodes.data.results.map(p=>{
            let episode ={
                id:p.id,
                name:p.name,
            }
            return episode
        })
        await Episode.bulkCreate(episodeList)
    }
}

module.exports={
    getAllFromApi,
    getAllFromDb,
    episodeImport,
}
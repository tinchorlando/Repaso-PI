const server = require("./src/app.js");
const { conn , Episode } = require("./src/db.js");
const axios = require ('axios');

// Para la precarga de nuestra DB cuando se levanta el server, se puede ejecutar la funcion getEpisodes() que deberán armarla ustedes. Dicha función nos cargaría todos los personajes en nuestra DB una vez que se inicia el servidor. Tener en cuenta que como es un pedido a la API, debería ser asíncrona.
async function loadDb(){
  const check = await Episode.findAll();
  if(check.length===0){
    const episodesFetch = await axios.get('https://rickandmortyapi.com/api/episode');
    const episodesFetch2 = await axios.get('https://rickandmortyapi.com/api/episode?page=2');
    const episodesFetch3 = await axios.get('https://rickandmortyapi.com/api/episode?page=3');
    const episodes1 = episodesFetch.data.results;
    const episodes2 = episodesFetch2.data.results;
    const episodes3 = episodesFetch3.data.results;
    const epiList = [...episodes1,...episodes2,...episodes3]
    const readyList = epiList.map(p=>{
      let episode = {
        id:p.id,
        name:p.name,
      }
      return episode
    });
    await Episode.bulkCreate(readyList)
  }
}


conn.sync({force:true}).then(() => {
  loadDb()
  server.listen(3001, () => {
    console.log("Listening at 3001"); // eslint-disable-line no-console
  });
});

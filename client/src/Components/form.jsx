import { useState , useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { getEpi, postNew } from "../redux/actions";


const Form = ()=>{

const store = useSelector(store=>store.episodes)
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(getEpi())       
},[])

const [state,setState]=useState({})
const [episode,setEpisode]=useState([])

const handleChange = (event)=>{
    setState({
        ...state,
        [event.target.name]:event.target.value
    })
    console.log(state)
    console.log(episode)
}
const handleSubmit = () =>{
dispatch(postNew(state.name,state.species,state.origin,state.image,episode))
}

return(
    <div>
        <h1>Formulario piola</h1>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" onChange={handleChange}></input> 
            <label>Species</label>
            <input type="text" name="species" onChange={handleChange}></input> 
            <label>Origin</label>
            <input type="text" name="origin" onChange={handleChange}></input> 
            <label>Image</label>
            <input type="text" name="image" onChange={handleChange}></input>             
            <label>Episodios</label>
            <select name="episodes" onChange={ (event)=>
                
                    setEpisode([...episode,event.target.value])
                
                } multiple>
                {  
                store.map(episode=><option key={episode.id} value={episode.id} >{`${episode.id}: ${episode.name}`}</option>)
                }
            </select>
            <button type="submit">Agregar!</button>

        </form>
    </div>
)
}
export default Form;
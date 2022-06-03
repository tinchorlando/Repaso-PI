import { useState , useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { getEpi, postNew } from "../redux/actions";
import { showSelectBox , selectorStyle } from "./utils/utils.js";

const Form = ()=>{

const store = useSelector(store=>store.episodes)
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(getEpi())
},[])

const [state,setState]=useState({})
const [episode,setEpisode]=useState([])
const [errors,setErrors]=useState({})

//funciones propias del form ↓

const validate = (valor)=>{
    let error={}
    if (!valor.name) error.name='Ingrese un valor';
    if (!valor.species) error.species='Ingrese un valor';
    if (!valor.origin) error.origin='Ingrese un valor';
    if (!valor.image) error.image='Ingrese un valor';
    return error
}
const handleChange = (event)=>{
    setState({
        ...state,
        [event.target.name]:event.target.value
    })
    setErrors(validate({
        ...state,
        [event.target.name]:event.target.value
    }))

}
const handleSubmit = async () =>{    
    let epis = []
    let checkbox = document.getElementById('allEpi')
    checkbox.checked ? epis = store.map(p=>p.id) : epis = episode
dispatch(postNew(state.name,state.species,state.origin,state.image,epis))
}



return(
    <div>
        <h1>Formulario piola</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" onChange={handleChange}></input> 
                {
                    errors.name ? <span>{errors.name}</span>:null
                }
            </div>
            <div>
                <label>Species</label>
                <input type="text" name="species" onChange={handleChange}></input> 
                {
                    errors.species ? <span>{errors.species}</span>:null
                }
            </div>
            <div>
                <label>Origin</label>
                <input type="text" name="origin" onChange={handleChange}></input> 
                {
                    errors.origin ? <span>{errors.origin}</span>:null
                }
            </div>
            <div>
                <label>Image</label>
                <input type="text" name="image" onChange={handleChange}></input>
                {
                    errors.image ? <span>{errors.image}</span>:null
                }            
            </div>
            <div>
                <label>Episodes</label>
                <input type="button" value="select episodes" onClick={showSelectBox} ></input>
                <div id='allEpiDiv'>
                    <label>All episodes</label>
                    <input id='allEpi'type='checkbox' value={store}></input>
                </div>                
                <div>
                    <select style={selectorStyle} id="selectBox" name="episodes" onChange={ (event)=>
                        
                            setEpisode([...episode,event.target.value])
                        
                        } multiple>
                        {  
                        store.map(episode=><option key={episode.id} value={episode.id} >{`${episode.id}: ${episode.name}`}</option>)
                        }
                    </select>
                </div>
            </div>
            
            <div>
                <button type="submit" disabled ={errors?true:false}>Submit!</button>
            </div>

        </form>
    </div>
)
}
export default Form;
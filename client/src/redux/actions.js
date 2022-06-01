import axios from 'axios';
import { GET_ALL , GET_ONE , POST_NEW} from './utils/actionTypes.js';
export const getAll = ()=>{
    return async (dispatch)=>{
        const characterGet = await axios.get('http://localhost:3001/characters')
        const characters = await characterGet.data
        dispatch({
            type:GET_ALL,
            payload:characters
        })
    }
}
export const getOne = (name)=>{
    return async (dispatch)=>{
        const characterGet = await axios.get('http://localhost:3001/characters')
        const character = await characterGet.data.filter(p=>p.name === name)
        dispatch({
            type:GET_ONE,
            payload:character
        })
    }
}
export const postNew = (name,species,origin,image,episodes)=>{
    return async(dispatch)=>{
        try{
            const post = await axios.post('http://localhost:3001/character',{
                name,
                species,
                origin,
                image,
                episode:episodes,
            })
            dispatch({
                type:POST_NEW,
                payload:console.log('Character created')
            })
        } catch (error){
            console.log(error)
        }
    }
}

import Card from "./card";
import { useDispatch , useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {getAll} from "../redux/actions.js"
import { useEffect } from "react";

const Home = ()=>{
    const state = useSelector(state=>state)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAll())
    },[])
return(
<div>
    {
        state.characters.map(p=><Card name={p.name} species={p.species} origin={p.origin} image={p.image} episode={p.episode} />)
    }
</div>


)
}
export default Home;
const Card = (props)=>{
    return(
    <div>
        <ul>
            <li>name: {props.name}</li>
            <li>species:{props.species}</li>
            <li>origin: {props.origin}</li>
            <li><img src={props.image} alt={`${props.name}'s image`}/></li>
            <li>Episodes</li>
        </ul>
        
    </div>
    )

}
export default Card;
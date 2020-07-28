import React from 'react';
import {Link} from 'react-router-dom';

const Pokemon = (props) =>{
    return(
        <div className="pokemon" >
            {
                props.image && 
                <figure>
                    <img src={props.image} alt={`${props.name}`} />
                </figure>
            }
            <Link to={`/pokemon/ver/${props.name}`} > {props.name} </Link>
        </div>
    )
}

export default Pokemon;
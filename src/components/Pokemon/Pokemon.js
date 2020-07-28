import React from 'react';
import {Link} from 'react-router-dom';
import './pokemon.css'
const Pokemon = (props) =>{
    return(
        <div className="pokemon" >
            {
                props.image ?
                    <div className="container_pokedex">
                        <figure>
                            <img src={props.image} alt={`${props.name}`} />
                            <figcaption> {props.name} </figcaption>
                        </figure>
                    </div>
                :
                <Link className="name_pokemon" to={`/pokemon/ver/${props.name}`} > {props.name} </Link>
            }
            
        </div>
    )
}

export default Pokemon;
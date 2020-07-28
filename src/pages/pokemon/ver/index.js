import React,{Fragment,useEffect,useState} from 'react';
import Loading from '../../../components/Loading/Loading';
import {GetPokemon} from '../../../api/pokemon';
import PokemonComponent from '../../../components/Pokemon/Pokemon';

const VerPokemon = (props) =>{
    const [PokemonActual,setPokemonActual] = useState({});
    const [IsLoading,setIsLoading] = useState(false);

    //Se llama al useEffect siempre antes de renderizar el componente
    useEffect(()=>{
        async function GetPokemonActual(){
            try{
                setIsLoading(true);
                const result = await GetPokemon(props.match.params.name);
                setPokemonActual(result.data);
                setIsLoading(false);
            }catch(error){
                console.log(error)
                setIsLoading(false);
            }
        }
        GetPokemonActual();
    },[])


    return(
        <Fragment>
            {
                IsLoading && 
                <Loading />
            }
            {PokemonActual.name && <PokemonComponent name={PokemonActual.name} image={PokemonActual.sprites.front_default} />}
            {PokemonActual.name && 
                <ul>
                    {
                        PokemonActual.abilities.map((item,index)=>{
                            return (<li> {item.ability.name} </li>)
                        })
                    }
                </ul>
            }
            
        </Fragment>
    )
}   

export default VerPokemon;
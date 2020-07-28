import React,{Fragment,useEffect,useState} from 'react';
import {GetAllPokemons} from '../../api/pokemon';
import Loading from '../../components/Loading/Loading';
import PokemonComponent from '../../components/Pokemon/Pokemon';

const Pokemon = () =>{
    const [ListPokemons,setListPokemons] = useState([]);
    const [IsLoading,setIsLoading] = useState(false);

    //Se llama al useEffect siempre antes de renderizar el componente
    useEffect(()=>{
        async function GetPokemons(){
            try{
                setIsLoading(true);
                const result = await GetAllPokemons();
                setListPokemons(result.data.results);
                setIsLoading(false);
            }catch(error){
                console.log(error)
                setIsLoading(false);
            }
        }
        GetPokemons();
    },[])

    return(
        <Fragment>
            {
                IsLoading && 
                <Loading />
            }
            <h1>Pokemon</h1>
            {
                ListPokemons.map((item,index)=>{
                    return(
                        <PokemonComponent key={index} name={item.name} />
                    )
                })
            }
        </Fragment>
    )
}

export default Pokemon;

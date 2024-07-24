import axios from "axios";
import { getBaseApiUrl } from "../../utilities";

const getListPokemon = async (offSet: number) => {
    const baseUrl = getBaseApiUrl();
    try {
        const response = await axios.get(`${baseUrl}/pokemon?offset=${offSet}&limit=20`);

        return response.data as PokemonList;
    } catch (error) {
        console.log(error)
    }
}

const getPokemonByUrl = async (url: string) => {
    try {
        const response = await axios.get(`${url}`);
        
        return response.data as GetPokemonById
    } catch (error) {
        console.log(error)
    }
}

const getPokemonById = async (id: string) => {
    const baseUrl = getBaseApiUrl();
    try {
        const response = await axios.get(`${baseUrl}/pokemon/${id}`);
        
        return response.data as GetPokemonById
    } catch (error) {
        console.log(error)
    }
}

const getPokemonHabitat = async (id: string) => {
    const baseUrl = getBaseApiUrl();
    try {
        const response = await axios.get(`${baseUrl}/pokemon-species/${id}`)
        
        return response.data as ResponseSpeciesPokemon
    } catch (error) {
        console.log(error)
    }
}


export {getListPokemon, getPokemonByUrl, getPokemonById, getPokemonHabitat};
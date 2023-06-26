import { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import pokemonData from '../data/pokedex.json';
import SearchBox from './SearchBox';
import PokemonCard from './PokemonCard';

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [search, setSearch] = useState("");
    const [language, setLanguage] = useState("english");

    useEffect(() => {
        setPokemons(pokemonData);
    }, []);

    const handlePokemonUpdate = (updatedPokemon) => {
        setPokemons(pokemons.map(pokemon => pokemon.id === updatedPokemon.id ? updatedPokemon : pokemon));
    };

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const filteredPokemons = pokemons.filter(pokemon =>
        pokemon.name[language].toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <Grid container spacing={2} style={{ padding: '24px' }}>
                <SearchBox onSearch={handleSearch} onLanguageChange={setLanguage} />
                {filteredPokemons.map((pokemon, index) => (
                    <PokemonCard
                        key={index}
                        pokemon={pokemon}
                        language={language}
                        onPokemonUpdate={handlePokemonUpdate}
                    />
                ))}
            </Grid>
        </div>
    );
}

export default Pokedex;

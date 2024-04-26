
import React, { useEffect, useState } from "react";
import NavBar from "../components/pokemonCard/navegationBar/Index";
import PokemonCard from "../components/pokemonCard/Index";
import { Container, Grid, Skeleton } from "@mui/material";
import axios from "axios";



export const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = []
    for(var i=1;i<=50; i++){
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
   Promise.all(endpoints.map((endpoint, key)=> axios.get(endpoint))).then((res) => setPokemons(res))

  };

  const pokemonFilter = (name) => {
    var filteredPokemons = []
    if(name === ''){
      getPokemons()
      console.log(pokemons)
    }
   for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)){
        filteredPokemons.push(pokemons[i])
      }
    }
    console.log(pokemons)
     setPokemons(filteredPokemons)
    }
    
  return (
    <div>
      <NavBar pokemonFilter= {pokemonFilter} />
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {pokemons.length === true ? (
          <Skeleton/> 
          ) : ( 
            pokemons.map((pokemon, index) => (
            <Grid item xs={12} sm={6} md={4} lg ={2} key={index}>
              <PokemonCard
              pokemon={(pokemon)} 
              name={pokemon.data.name} 
              image= {pokemon.data.sprites.front_default}
              types = {pokemon.data.types}
              background = {'blue'}
              /*order = {pokemon.data.order}*/
             />
            </Grid>
          ))
          )}
        </Grid>
      </Container>
    </div>
  );
};


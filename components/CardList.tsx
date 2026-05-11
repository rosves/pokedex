"use client";


// Liste des pokémons, par défaut 50 par 50
// Scroll en fin de page => refetch n pokémons en fonction du filtre "limit"
// Filtre le nom du pokémon > oui
// Filtre sur le(s) type(s) du pokémon > oui
// Affiche des pokémons sur des cards avec l'ID, l'image, le nom, les types > oui

import { useState } from "react";
import Link from "next/link";
import Card, { Pokemon } from "./Card";

export default function CardList({ pokemons }: { pokemons: Pokemon[] }) {
  const [search, setSearch] = useState("");

  const filteredNames = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );
  const filteredTypes = pokemons.filter((pokemon) =>
    pokemon.types.some((type) => type.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex flex-col gap-6">
      <input
        type="text"
        placeholder="rechercher un pokemon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-gray-500"
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filteredNames.map((pokemon) => (
          <Link key={pokemon.pokedexId} href={`/pokemon/${pokemon.pokedexId}`}>
            <Card pokemon={pokemon} />
          </Link>
        ))}
      </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filteredTypes.map((pokemon) => (
          <Link key={pokemon.pokedexId} href={`/pokemon/${pokemon.pokedexId}`}>
            <Card pokemon={pokemon} />
          </Link>
        ))}
      </div>
    </div>
    
  );
}

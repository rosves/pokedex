export type Pokemon = {
  id: number;
  pokedexId: number;
  name: string;
  image: string;
  sprite: string;
  stats: {
    HP: number;
    speed: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
  };
  generation: number;
  evolutions: { name: string; pokedexId: number }[];
  types: { id: number; name: string; image: string }[];
};

export default function Card({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-transform duration-200 hover:scale-105">
      <span className="self-start text-xs text-gray-400">#{pokemon.pokedexId}</span>
      <img src={pokemon.image} alt={pokemon.name} width={120} height={120} />
      <h2 className="text-lg font-semibold">{pokemon.name}</h2>
      <div className="flex gap-1">
        {pokemon.types.map((type) => (
          <span
            key={type.id}
            className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
          >
            {type.name}
          </span>
        ))}
      </div>
    </div>
  );
}

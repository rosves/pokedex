import { Pokemon } from "@/components/Card";
import Link from "next/link";

export default async function PokemonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await fetch(`https://nestjs-pokedex-api.vercel.app/pokemons/${id}`);
  const pokemon: Pokemon = await res.json();

  return (
    <main className="flex flex-col items-center gap-6 p-8">
      <Link href="/" className="self-start text-sm text-gray-500 hover:text-gray-800">
       Retour
      </Link>

      <div className="flex gap-12">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold">{pokemon.name}</h1>
          <img src={pokemon.image} alt={pokemon.name} width={220} height={220} />
          <div className="flex gap-2">
            {pokemon.types.map((type) => (
              <span key={type.id} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
                {type.name}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 justify-center">
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 rounded-xl border border-gray-200 bg-white p-6 text-sm">
            <span className="font-semibold">HP</span><span>{pokemon.stats.HP}</span>
            <span className="font-semibold">Attaque</span><span>{pokemon.stats.attack}</span>
            <span className="font-semibold">Défense</span><span>{pokemon.stats.defense}</span>
            <span className="font-semibold">Attaque Spéciale</span><span>{pokemon.stats.specialAttack}</span>
            <span className="font-semibold">Défense Spéciale</span><span>{pokemon.stats.specialDefense}</span>
            <span className="font-semibold">Vitesse</span><span>{pokemon.stats.speed}</span>
          </div>

          {pokemon.evolutions.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-sm">Évolutions</h2>
              <div className="flex gap-2">
                {pokemon.evolutions.map((evolution) => (
                  <Link
                    key={evolution.pokedexId}
                    href={`/pokemon/${evolution.pokedexId}`}
                    className="rounded-lg bg-gray-800 px-4 py-2 text-sm text-white hover:bg-gray-600"
                  >
                    {evolution.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

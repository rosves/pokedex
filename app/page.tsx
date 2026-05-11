import CardList from "@/components/CardList";
import { Pokemon } from "@/components/Card";

export default async function Home() {
  const res = await fetch("https://nestjs-pokedex-api.vercel.app/pokemons?limit=151");
  const pokemons: Pokemon[] = await res.json();

  return (
    <main className="flex flex-col gap-8 p-8">
      <h1 className="text-3xl font-bold">Mon Pokédex</h1>
      <CardList pokemons={pokemons} />
    </main>
  );
}

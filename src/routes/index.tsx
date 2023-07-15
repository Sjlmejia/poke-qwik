import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";


export default component$(() => {
  
  const pokemonId = useSignal<number>(1);
  
  const changePokemonId = $((value:number) => {
    if((pokemonId.value + value) <=0 ) return;
  })
  return (
    <>
      <span class="text-2xl">Buscador simple</span>
      
      <span class="text-9xl">{pokemonId}</span>

      {/* Todo: crear imagen */}
      <img  height="96" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId.value}.png`}
      alt="Pokemon Sprite" style={{ width:"96"}}/>

      <div class="mt-2">
        <button onClick$={() => changePokemonId(-1) } class="btn btn-primary mr-2">Anterior</button>
        <button onClick$={() => changePokemonId(+1) } class="btn btn-primary">Siguientes</button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

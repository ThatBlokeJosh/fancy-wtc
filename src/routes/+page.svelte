<script lang="ts">
  import { onMount } from "svelte";
  import {getMessage} from "../utils/fetch.svelte" 
  import { fly, scale } from "svelte/transition";
  import type { Commit } from "../utils/types";

  let message: Commit | undefined = $state()
  onMount(async () => {
    message = await getMessage()
  })
</script>

<div class="p-[5vw]">
  <div class="grid">
    <h1 class="text-3xl">A profound commit message once said...</h1>
    {#if message}
      <p transition:fly={{duration:500}} class="text-9xl">{message.commit_message}</p>
      <a transition:fly={{duration:500, delay: 500}} href="/?hash={message.hash}" class="mt-[1vh] text-2xl w-fit text-orange-500 italic">permalink</a>
    {/if}
  </div>
</div>

<div class="absolute right-0 bottom-0 w-[100vw]">
  <p class="text-right p-[2vw] text-lg">credit to: <a class="text-orange-500 italic text-xl" href="https://whatthecommit.com/{message?.hash}">What the font</a></p>
</div>

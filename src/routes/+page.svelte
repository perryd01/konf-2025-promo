<script>
  import ClippedTextEffect from "$lib/components/clippedText/ClippedTextEffect.svelte";
  import LogoAnimated from "$lib/components/LogoAnimated.svelte";
  import { setContext } from "svelte";
  import { fade } from "svelte/transition";

  let animationFlag = $state(false);

  $effect(() => {
    setTimeout(() => (animationFlag = true), 500);
  });
</script>

{#if animationFlag}
  <div class="flex flex-col gap-4 justify-center items-center">
    <div class="flex flex-row gap-2 items-center">
      <div class="size-24 lg:size-32">
        <LogoAnimated />
      </div>
      <div
        class="text-3xl md:text-4xl lg:text-6xl flex flex-col"
        in:fade={{ duration: 300, delay: 1500 }}
      >
        <h1>
          <div class="flex flex-row justify-between items-center">
            <span>Simonyi</span>
            <div class="size-8 fill-accent-light">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" />
              </svg>
            </div>
          </div>
          <span>Konferencia</span>
        </h1>
      </div>
    </div>
    <div
      in:fade={{ duration: 1000, delay: 1500 }}
      class="py-16 text-4xl lg:text-6xl"
    >
      <ClippedTextEffect text={"2025 03 18"} numberOfEchos={3} />
    </div>
  </div>
{/if}

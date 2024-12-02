<script lang="ts">
  import { fade } from "svelte/transition";
  import { customFade } from "../expand-animation";

  interface Props {
    text: string;
    outline?: boolean;
    clipTop?: number;
    clipBottom?: number;
    shiftTop?: number;
    shiftBottom?: number;
  }
  let { text, outline, clipBottom, clipTop, shiftBottom, shiftTop }: Props =
    $props();

  const shiftAmmount = $derived.by(() => {
    const max = Math.max(clipBottom ?? 0, clipTop ?? 0);

    if (max === 0) {
      return 0;
    }

    const baseShift = 18;

    const adjustedIncrease = max / (1 + max / 30);

    return baseShift + adjustedIncrease;
  });
</script>

<span
  class:outline
  style="--clip-bot:{clipBottom ?? 0}%;--clip-top:{clipTop ??
    0}%;--shift:{shiftAmmount}px;"
  class:clipped-bottom={!!clipBottom}
  class:clipped-top={!!clipTop}>{text}</span
>

<style lang="postcss">
  .outline {
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #8d363d;
    clip-path: rect(10px, 20px, 40px, 0px);
    opacity: 100%;
    @apply select-none absolute;
  }

  .clipped-bottom {
    -webkit-clip-path: inset(0 0 var(--clip-bot) 0);
    clip-path: inset(0 0 var(--clip-bot) 0);
    margin-bottom: var(--shift);
    @apply bottom-0 left-0;
  }

  .clipped-top {
    -webkit-clip-path: inset(var(--clip-top) 0 0 0);
    clip-path: inset(var(--clip-top) 0 0 0);
    margin-top: calc(var(--shift) + 2px);
    @apply top-0 left-0;
  }
</style>

<script lang="ts">
  import Text from "./Text.svelte";

  interface Props {
    text: string;
    numberOfEchos: number;
  }

  let { text, numberOfEchos }: Props = $props();

  const vals = [40, 50, 60, 70];
</script>

<div class="text-accent-light relative">
  {#each vals as v}
    <Text clipTop={v} {text} outline />
    <Text clipBottom={v} {text} outline />
  {/each}
  <Text {text} />
</div>

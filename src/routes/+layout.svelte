<script lang="ts">
  import "../app.css";
  let { children } = $props();
</script>

<div class="h-svh font-cy bg-bg-light text-primary-light">
  <main
    class="container mx-auto size-full p-4 flex justify-center items-center"
  >
    {@render children()}
  </main>
</div>

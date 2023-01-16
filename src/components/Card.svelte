<script lang="ts">
  import clsx from "clsx";

  export let className = "";
  export let tag = "div";
</script>

<svelte:element this={tag} class={clsx(className, "group relative flex flex-col items-start")}>
  <slot />
</svelte:element>

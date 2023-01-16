<script lang="ts">
  import CardLink from "./CardLink.svelte";
  export let tag = "h2";
  export let href: string;
</script>

<svelte:element this={tag} class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 dark:bg-zinc-800/50 group-hover:text-orange-500 dark:group-hover:text-purple-500 group-hover:underline">
  {#if href}
    <CardLink {href}>
      <slot />
    </CardLink>
  {:else}
    <slot />
  {/if}
</svelte:element>

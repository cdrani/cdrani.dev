<script lang="ts">
  export let href: string;
</script>

<div>
  <div
    class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
  />
  <a {href} class="group-hover:underline group-hover:text-orange-500 dark:group-hover:text-violet-500" {...$$restProps}>
    <span class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
    <span class="relative z-10">
      <slot />
    </span>
  </a>
</div>

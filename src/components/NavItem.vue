<script lang="ts" setup>
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  pathName: { type: String, required: true },
});

const isActive = props.href === props.pathName;
</script>

<template>
  <li>
    <a
      :href="props.href"
      class="relative block px-3 py-2 transition"
      :class="isActive ? 'text-amber-500 dark:text-violet-400' : 'hover:text-amber-500 dark:hover:text-violet-300'"
    >
      <slot />
      <span
      v-if="isActive"
      class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-amber-500/0 via-amber-500/40 to-amber-500/0 dark:from-violet-400/0 dark:via-violet-400/40 dark:to-violet-400/0"
      />
    </a>
  </li>
</template>

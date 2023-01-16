<script lang="ts" setup>
const props = defineProps({
  href: String,
});
</script>

<template>
  <a href="{{props.href}}" class="transition hover:text-teal-500 dark:hover:text-teal-400">
    <slot />
  </a>
</template>

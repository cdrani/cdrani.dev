<script lang="ts">
  import clsx from "clsx";
  import getReadingTime from "reading-time";
  import BookOpen from "./icons/BookOpen.svelte";
  export let content: string;
  export let className = "";

  const readingTime = getReadingTime(content)?.text;
</script>
<span class={clsx("flex items-center text-sm text-zinc-400 dark:text-zinc-500 tracking-tight", className)}><BookOpen className="h-4 w-4 fill-zinc-500 dark:fill-zinc-200 mr-2" /> {readingTime}</span>

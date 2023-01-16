<script lang="ts">
  import clsx from "clsx";
  import dayjs from "dayjs";

  export let className = "";
  export let date: string;
  export let readingTime: string;

  date = dayjs(date).format("MMM D, YYYY").toString();
</script>

<div class="mt-3 flex items-center relative z-10">
  <time class={clsx(className, "text-sm text-zinc-400 dark:text-zinc-500")}>
    {date}
  </time>
  <span class="px-2 text-lg text-zinc-400 dark:text-zinc-500">·</span>
  <span class="text-sm text-zinc-400 dark:text-zinc-500">{readingTime}</span>
</div>

<script lang="ts">
  import clsx from "clsx";
  import dayjs from "dayjs";

  export let className = "";
  export let date: string;

  date = dayjs(date).format("MMM D, YYYY").toString();
</script>

<time class={clsx(className, "text-sm text-zinc-400 dark:text-zinc-500")}>
  {date}
</time>

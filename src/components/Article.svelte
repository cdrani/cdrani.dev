<script lang="ts">
  import getReadingTime from "reading-time";

  import Card from "./Card.svelte";
  import CardTitle from "./CardTitle.svelte";
  import CardMetadata from "./CardMetadata.svelte";
  import CardDescription from "./CardDescription.svelte";

  export let title: string;
  export let date: string;
  export let description: string;
  export let content: string;
  export let slug: string;
  export let cuid: string;
  let readingTime: string;

  readingTime = getReadingTime(content)?.text;
</script>

<Card tag="article">
  <CardTitle href={`/posts/${slug}-${cuid}`}>
    {title}
  </CardTitle>
  <CardDescription>
    {description}
  </CardDescription>
  <CardMetadata {date} {readingTime} />
</Card>

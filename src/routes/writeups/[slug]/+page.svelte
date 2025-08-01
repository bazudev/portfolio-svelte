<script lang="ts">
	import Footer from "$lib/components/layout/Footer.svelte";
	import Header from "$lib/components/layout/Header.svelte";

	let { data } = $props();
</script>

<Header title={data.title} nextUrl={data.nextUrl} prevUrl={data.prevUrl} />
<main class="container mx-auto max-w-6xl px-6 py-12">
	<div class="content">{@html data.html}</div>
</main>
<Footer hasNav={false} />

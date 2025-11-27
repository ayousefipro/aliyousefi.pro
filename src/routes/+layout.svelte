<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex min-h-screen flex-col items-center bg-primary text-textPrimary">
	<Header />
	<main class="w-full flex-grow px-4 py-8 md:max-w-5xl">
		<slot />
	</main>
	<Footer />
</div>
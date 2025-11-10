<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main class="layout bg-blue-500 text-white min-h-screen">
	<Header></Header>
	<div class="page-content">
		<slot></slot>
	</div>
	<Footer></Footer>
</main>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.page-content {
		flex: 1;
	}
</style>

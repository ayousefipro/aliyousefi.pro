<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="layout bg-blue-500 text-white min-h-screen flex flex-col items-center">
	<Header></Header>
	<main class="page-content flex-grow w-full -max-w-4x1 px-4 py-8">
		<slot></slot>
	</main>
	<Footer></Footer>
</div>
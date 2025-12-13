<script lang="ts">
	import type { PageData } from './$types';
	
	// دریافت اطلاعات از فایل server.ts
	export let data: PageData;
</script>

<svelte:head>
	<title>وبلاگ - علی یوسفی</title>
</svelte:head>

<section class="mx-auto max-w-3xl">
	<h1 class="mb-12 text-center font-serif text-4xl font-bold text-secondary md:text-5xl">
		نوشته‌های من
	</h1>

	<div class="space-y-8">
		{#each data.posts as post}
			<a 
				href="/blog/{post.slug}" 
				class="group block rounded-xl border border-secondary/20 bg-primary-darker p-6 transition-all hover:border-secondary hover:shadow-lg hover:shadow-secondary/10"
			>
				<div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
					<h2 class="font-serif text-2xl font-bold text-textPrimary transition-colors group-hover:text-secondary">
						{post.title}
					</h2>
					<span class="text-sm text-textPrimary/60">
						{post.date}
					</span>
				</div>
				<p class="mt-4 text-sm text-secondary opacity-0 transition-opacity group-hover:opacity-100">
					خواندن مقاله ←
				</p>
			</a>
		{/each}
		
		{#if data.posts.length === 0}
			<p class="text-center text-lg text-textPrimary/60">
				هنوز پستی منتشر نشده است.
			</p>
		{/if}
	</div>
</section>

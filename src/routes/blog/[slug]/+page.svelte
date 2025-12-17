    <script lang="ts">
    	import type { PageData } from './$types';
    	export let data: PageData;
    </script>

    <svelte:head>
    	<title>{data.meta.title} - علی یوسفی</title>
    	<meta name="description" content="مقاله‌ای در وبلاگ علی یوسفی با عنوان {data.meta.title}" />
    </svelte:head>

    <div class="mb-8 text-center">
    	<h1 class="mb-4 font-serif text-4xl font-extrabold text-secondary md:text-5xl">
    		{data.meta.title}
    	</h1>
    	<p class="text-sm text-textPrimary/70">منتشر شده در تاریخ: {data.meta.date}</p>
    </div>

    <!--
        کامپوننت svelte:component یک راه امن و استاندارد برای رندر کردن
        کامپوننت‌های Svelte (که mdsvex فایل ما را به آن تبدیل کرده) است.
    -->
    <svelte:component this={data.content} />

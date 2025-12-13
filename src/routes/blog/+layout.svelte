<script>
	// اینجا می‌توانیم منطق مشترک وبلاگ را اضافه کنیم
</script>

<div class="mx-auto max-w-3xl w-full px-4 py-10">
	<!-- دکمه بازگشت ساده -->
	<a
		href="/"
		class="mb-8 inline-block text-secondary opacity-80 transition-opacity hover:opacity-100"
	>
		← بازگشت به خانه
	</a>

	<!-- 
      کلاس prose تمام استایل‌های متنی (تیترها، پاراگراف‌ها و...) را اعمال می‌کند.
      prose-invert: رنگ‌ها را برای پس‌زمینه تیره تنظیم می‌کند.
      prose-lg: سایز متن را کمی بزرگ‌تر و خواناتر می‌کند.
    -->
	<article class="prose prose-lg prose-invert max-w-none text-textPrimary/90 
		prose-headings:font-serif prose-headings:text-secondary 
		prose-a:text-secondary prose-a:no-underline hover:prose-a:underline
		prose-strong:text-white">
		<slot />
	</article>
</div>

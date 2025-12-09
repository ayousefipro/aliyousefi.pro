<script>
	const skills = [
		'Svelte / SvelteKit',
		'Tailwind CSS',
		'TypeScript',
		'Git',
		'VMware vSphere',
		'Linux (Ubuntu, CentOS)',
		'Cisco & Mikrotik',
		'Network Security',
		'Zabbix & PRTG',
		'PowerShell',
		'Infrastructure Design',
		'Proxmox / KVM'
	];
</script>

<div class="mx-auto flex max-w-3xl flex-col gap-y-16 md:gap-y-20">
	<!-- بخش هدر و تصویر -->
	<section class="flex flex-col items-center gap-8 md:flex-row">
		<div class="h-40 w-40 flex-shrink-0 md:h-48 md:w-48">
			<img
				src="/profile-picture.jpg"
				alt="عکس پروفایل علی یوسفی"
				class="h-full w-full rounded-full object-cover shadow-lg ring-4 ring-secondary/30"
			/>
		</div>
		<div class="text-center md:text-right">
			<h1 class="font-serif text-5xl font-bold">درباره من</h1>
			<p class="mt-4 text-lg leading-relaxed text-textPrimary/80">
				من یک توسعه‌دهنده وب با ریشه‌هایی عمیق در مهندسی سیستم و زیرساخت هستم. این پیش‌زمینه به من
				دیدگاهی منحصربه‌فرد برای ساختن برنامه‌هایی می‌دهد که نه تنها زیبا و کارآمد هستند، بلکه بر
				پایه‌ای مستحکم و مقیاس‌پذیر بنا شده‌اند.
			</p>
		</div>
	</section>

	<!-- بخش داستان و روایت -->
	<section>
		<h2 class="mb-6 text-center font-serif text-3xl font-bold text-secondary md:text-right">
			از زیرساخت تا رابط کاربری: مسیر من
		</h2>
		<div class="space-y-6 leading-loose text-textPrimary/90">
			<p>
				مسیر حرفه‌ای من از قلب زیرساخت فناوری اطلاعات آغاز شد. سال‌ها تجربه در نقش‌هایی چون مدیریت
				سیستم و پشتیبانی شبکه در شرکت‌هایی نظیر «نوژن رایانه» و «صرافی OMPFINEX»، به من آموخت که
				ستون فقرات هر سرویس دیجیتال موفقی، پایداری، امنیت و عملکرد بهینه است. از راه‌اندازی
				شبکه‌ها با تجهیزات سیسکو و میکروتیک گرفته تا مدیریت سرورهای مجازی (VMware) و تضمین امنیت
				صدها ماشین مجازی، همیشه دغدغه‌ام این بود که سیستم‌ها بی‌نقص کار کنند.
			</p>
			<p>
				اما کنجکاوی و اشتیاق به خلق کردن، مرا به سمت دیگری سوق داد. دیگر تنها نگهداری از سیستم‌ها
				برایم کافی نبود؛ می‌خواستم در ساختن تجربه‌هایی که کاربران نهایی مستقیماً با آن در تعامل
				هستند، نقش داشته باشم. این جرقه‌ای بود که مرا به دنیای توسعه وب، و به طور خاص، به
				اکوسیستم مدرن و واکنش‌گرای SvelteKit و زیبایی استایل‌دهی با Tailwind CSS کشاند.
			</p>
			<p>
				امروز، هدف من تلفیق این دو دنیاست: استفاده از درک عمیق خود از زیرساخت برای طراحی و توسعه
				برنامه‌های وب که از پایین‌ترین لایه (Backend و سرور) تا بالاترین پیکسل (Frontend و رابط
				کاربری)، بهینه، امن و قابل اعتماد باشند. به دنبال چالش‌هایی هستم که به من اجازه دهند
				راه‌حل‌های کامل و جامعی را از ایده تا اجرا، خلق کنم.
			</p>
		</div>
	</section>

	<!-- بخش مهارت‌ها -->
	<section>
		<h2 class="mb-8 text-center font-serif text-3xl font-bold text-secondary">جعبه ابزار من</h2>
		<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
			{#each skills as skill}
				<div
					class="transform rounded-lg bg-primary-darker p-4 text-center shadow-md transition-transform hover:-translate-y-1 hover:bg-secondary/20"
				>
					<span class="font-sans font-medium">{skill}</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- بخش شخصی -->
	<section>
		<h2 class="mb-6 text-center font-serif text-3xl font-bold text-secondary">فراتر از کد</h2>
		<p class="mx-auto max-w-2xl text-center leading-loose text-textPrimary/80">
			وقتی پشت مانیتور نیستم، از یادگیری زبان‌های جدید (در حال حاضر آلمانی) لذت می‌برم و همیشه به
			دنبال راهی برای به چالش کشیدن ذهنم هستم.
		</p>
	</section>
</div>

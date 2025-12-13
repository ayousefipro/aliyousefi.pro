import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// 1. پیدا کردن تمام فایل‌های +page.md در زیرپوشه‌های همین مسیر
	// import.meta.glob یک ویژگی قدرتمند Vite است
	const paths = import.meta.glob('./*/+page.md', { eager: true });

	const posts = [];

	for (const path in paths) {
		const file = paths[path];
		// مسیر چیزی شبیه "./first-post/+page.md" است
		// ما نام پوشه (first-post) را به عنوان اسلاگ (Slug) استخراج می‌کنیم
		const slug = path.split('/')[1];

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as any;
			
			posts.push({
				slug,
				title: metadata.title || slug, // اگر عنوانی نبود، نام پوشه را نشان بده
				date: metadata.date || 'تاریخ نامشخص'
			});
		}
	}

	// مرتب‌سازی پست‌ها بر اساس تاریخ (از جدید به قدیم)
	const sortedPosts = posts.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	return { posts: sortedPosts };
};
